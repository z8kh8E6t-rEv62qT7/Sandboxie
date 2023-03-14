#include "stdafx.h"
#include "TraceView.h"
#include "..\SandMan.h"
#include "../QSbieAPI/SbieAPI.h"
#include "..\Models\TraceModel.h"
#include "..\..\MiscHelpers\Common\Common.h"
#include "..\..\MiscHelpers\Common\CheckList.h"
#include "SbieView.h"

//class CTraceFilterProxyModel : public CSortFilterProxyModel
//{
//public:
//	CTraceFilterProxyModel(QObject* parent = 0) : CSortFilterProxyModel(parent)
//	{
//		m_FilterPid = 0;
//		m_FilterTid = 0;
//	}
//
//	bool filterAcceptsRow(int source_row, const QModelIndex& source_parent) const
//	{
//		CTraceModel* pTraceModel = (CTraceModel*)sourceModel();
//
//		QModelIndex index = pTraceModel->index(source_row, 0, source_parent);
//		//CTraceEntryPtr pEntry = pTraceModel->GetEntry(index);
//		//if (pEntry.data() == NULL) 
//		{
//			QVariant Id = pTraceModel->GetItemID(index);
//			StrPair typeId = Split2(Id.toString(), "_");
//
//			if (m_FilterPid != 0 && typeId.first == "pid") {
//				if (m_FilterPid != typeId.second.toUInt())
//					return false;
//			}
//
//			if (m_FilterTid != 0 && typeId.first == "tid") {
//				if (m_FilterTid != typeId.second.toUInt())
//					return false;
//			}
//		}
//
//		return CSortFilterProxyModel::filterAcceptsRow(source_row, source_parent);
//	}
//
//	quint32		m_FilterPid;
//	quint32		m_FilterTid;
//};

////////////////////////////////////////////////////////////////////////////////////////
// CTraceTree

CTraceTree::CTraceTree(QWidget* parent) 
	: CPanelWidget<QTreeViewEx>(parent) 
{
	m_bHighLight = false;
	//m_FilterCol = -1;

	m_pTreeList->setAlternatingRowColors(theConf->GetBool("Options/AltRowColors", false));

	m_pTreeList->setSelectionMode(QAbstractItemView::ExtendedSelection);
	m_pTreeList->setUniformRowHeights(true); // critical for good performance with huge data sets

	m_pTraceModel = new CTraceModel(this);
	//connect(m_pTraceModel, SIGNAL(NewBranche()), this, SLOT(UpdateFilters()));

	//m_pSortProxy = new CTraceFilterProxyModel(this);
	//m_pSortProxy->setSortRole(Qt::EditRole);
	//m_pSortProxy->setSourceModel(m_pTraceModel);
	//m_pSortProxy->setDynamicSortFilter(true);

	//m_pTreeList->setModel(m_pSortProxy);
	//m_pSortProxy->setView(m_pTreeList);

	m_pTreeList->setModel(m_pTraceModel);

	QStyle* pStyle = QStyleFactory::create("windows");
	m_pTreeList->setStyle(pStyle);
	m_pTreeList->setItemDelegate(new CTreeItemDelegate());
	m_pTreeList->setExpandsOnDoubleClick(false);
	//m_pTreeList->setSortingEnabled(true);

	m_pTreeList->setContextMenuPolicy(Qt::CustomContextMenu);
	connect(m_pTreeList, SIGNAL(customContextMenuRequested(const QPoint&)), this, SLOT(OnMenu(const QPoint&)));

	m_pTreeList->setColumnReset(1);
	//connect(m_pTreeList, SIGNAL(ResetColumns()), m_pTreeList, SLOT(OnResetColumns()));
	//connect(m_pBoxTree, SIGNAL(ColumnChanged(int, bool)), this, SLOT(OnColumnsChanged()));

	//m_pMainLayout->addWidget(CFinder::AddFinder(m_pTreeList, m_pSortProxy));
	CFinder* pFinder;
	m_pMainLayout->addWidget(CFinder::AddFinder(m_pTreeList, this, CFinder::eHighLightDefault, &pFinder));
	pFinder->SetModel(m_pTraceModel);
	//QObject::connect(pFinder, SIGNAL(SelectNext()), this, SLOT(SelectNext()));


	QByteArray Columns = theConf->GetBlob("MainWindow/TraceLog_Columns");
	if (!Columns.isEmpty())
		((QTreeViewEx*)GetView())->restoreState(Columns);
	else
		((QTreeViewEx*)GetView())->OnResetColumns();
}

CTraceTree::~CTraceTree() 
{
	theConf->SetBlob("MainWindow/TraceLog_Columns", GetView()->header()->saveState());
}

void CTraceTree::SetFilter(const QString& Exp, int iOptions, int Column) 
{
	bool bReset = m_bHighLight != ((iOptions & CFinder::eHighLight) != 0) || (!m_bHighLight && m_FilterExp != Exp);

	//QString ExpStr = ((iOptions & CFinder::eRegExp) == 0) ? Exp : (".*" + QRegularExpression::escape(Exp) + ".*");
	//QRegularExpression RegExp(ExpStr, (iOptions & CFinder::eCaseSens) != 0 ? QRegularExpression::NoPatternOption : QRegularExpression::CaseInsensitiveOption);
	//m_FilterExp = RegExp;
	m_FilterExp = Exp;
	m_bHighLight = (iOptions & CFinder::eHighLight) != 0;
	//m_FilterCol = Col;

	if(bReset)
		emit FilterChanged();
}



////////////////////////////////////////////////////////////////////////////////////////
// CMonitorList

CMonitorList::CMonitorList(QWidget* parent) 
	: CPanelWidget<QTreeViewEx>(parent) 
{
	m_pTreeList->setAlternatingRowColors(theConf->GetBool("Options/AltRowColors", false));

	m_pTreeList->setSelectionMode(QAbstractItemView::ExtendedSelection);

	m_pMonitorModel = new CMonitorModel(this);
	//connect(m_pMonitorModel, SIGNAL(NewBranche()), this, SLOT(UpdateFilters()));

	m_pSortProxy = new CSortFilterProxyModel(this);
	m_pSortProxy->setSortRole(Qt::EditRole);
	m_pSortProxy->setSourceModel(m_pMonitorModel);
	m_pSortProxy->setDynamicSortFilter(true);

	m_pTreeList->setModel(m_pSortProxy);

	QStyle* pStyle = QStyleFactory::create("windows");
	m_pTreeList->setStyle(pStyle);
	m_pTreeList->setItemDelegate(new CTreeItemDelegate());
	
	m_pTreeList->setExpandsOnDoubleClick(false);
	m_pTreeList->setSortingEnabled(true);

	m_pTreeList->setContextMenuPolicy(Qt::CustomContextMenu);
	connect(m_pTreeList, SIGNAL(customContextMenuRequested(const QPoint&)), this, SLOT(OnMenu(const QPoint&)));

	m_pTreeList->setColumnReset(1);
	//connect(m_pTreeList, SIGNAL(ResetColumns()), m_pTreeList, SLOT(OnResetColumns()));
	//connect(m_pBoxTree, SIGNAL(ColumnChanged(int, bool)), this, SLOT(OnColumnsChanged()));

	m_pMainLayout->addWidget(CFinder::AddFinder(m_pTreeList, m_pSortProxy));


	QByteArray Columns = theConf->GetBlob("MainWindow/Monitor_Columns");
	if (!Columns.isEmpty())
		((QTreeViewEx*)GetView())->restoreState(Columns);
	else
		((QTreeViewEx*)GetView())->OnResetColumns();
}

CMonitorList::~CMonitorList() 
{
	theConf->SetBlob("MainWindow/Monitor_Columns", GetView()->header()->saveState());
}


////////////////////////////////////////////////////////////////////////////////////////
// CTraceView

CTraceView::CTraceView(bool bStandAlone, QWidget* parent) : QWidget(parent)
{
	//m_pTreeList->setItemDelegate(theGUI->GetItemDelegate());

	m_FullRefresh = true;

	m_LastID = 0;
	m_LastCount = 0;
	m_bUpdatePending = false;

	m_FilterPid = 0;
	m_FilterTid = 0;
	m_FilterStatus = 0;

	m_pMainLayout = new QVBoxLayout();
	m_pMainLayout->setContentsMargins(0,0,0,0);
	this->setLayout(m_pMainLayout);

	m_pTraceToolBar = new QToolBar();

	m_pMonitorMode = m_pTraceToolBar->addAction(CSandMan::GetIcon("Monitor"), tr("Monitor mode"), this, SLOT(OnSetMode()));
	m_pMonitorMode->setCheckable(true);
	m_pMonitorMode->setChecked(theConf->GetBool("Options/UseMonitorMode", true));

	m_pTraceTree = m_pTraceToolBar->addAction(CSandMan::GetIcon("Tree"), tr("Show as task tree"), this, SLOT(OnSetTree()));
	m_pTraceTree->setCheckable(true);
	m_pTraceTree->setChecked(theConf->GetBool("Options/UseLogTree"));

	m_pObjectTree = m_pTraceToolBar->addAction(CSandMan::GetIcon("Objects"), tr("Show NT Object Tree"), this, SLOT(OnObjTree()));
	m_pObjectTree->setCheckable(true);
	m_pObjectTree->setChecked(theConf->GetBool("Options/UseObjectTree"));

	m_pTraceToolBar->addSeparator();
	m_pTraceToolBar->layout()->setSpacing(3);

	m_pTraceToolBar->addWidget(new QLabel(tr("PID:")));
	m_pTracePid = new QComboBox();
	m_pTracePid->addItem(tr("[All]"), 0);
	m_pTracePid->setMinimumWidth(225);
	connect(m_pTracePid, SIGNAL(currentIndexChanged(int)), this, SLOT(OnSetPidFilter()));
	m_pTraceToolBar->addWidget(m_pTracePid);

	m_pTraceToolBar->addWidget(new QLabel(tr("TID:")));
	m_pTraceTid = new QComboBox();
	m_pTraceTid->addItem(tr("[All]"), 0);
	m_pTraceTid->setMinimumWidth(75);
	m_pTraceTid->setEditable(true);
	connect(m_pTraceTid, SIGNAL(currentIndexChanged(int)), this, SLOT(OnSetTidFilter()));
	m_pTraceToolBar->addWidget(m_pTraceTid);

	m_pTraceToolBar->addWidget(new QLabel(tr("Type:")));
	m_pTraceType = new QCheckList();
	//m_pTraceType->addItem(tr("[All]"), 0);
	m_pTraceType->setAllCheckedText(tr("[All]"));
	m_pTraceType->setNoneCheckedText(tr("[All]"));
	foreach(quint32 type, CTraceEntry::AllTypes()) 
		m_pTraceType->addCheckItem(CTraceEntry::GetTypeStr(type), type, Qt::Unchecked);
	m_pTraceType->setMinimumWidth(100);
	connect(m_pTraceType, SIGNAL(globalCheckStateChanged(int)), this, SLOT(OnSetFilter()));
	m_pTraceToolBar->addWidget(m_pTraceType);

	m_pTraceToolBar->addWidget(new QLabel(tr("Status:")));
	m_pTraceStatus = new QComboBox();
	m_pTraceStatus->addItem(tr("[All]"), 0);
	m_pTraceStatus->addItem(tr("Open"), 1);
	m_pTraceStatus->addItem(tr("Closed"), 2);
	m_pTraceStatus->addItem(tr("Trace"), 3);
	m_pTraceStatus->addItem(tr("Other"), 4);
	m_pTraceStatus->setMinimumWidth(75);
	connect(m_pTraceStatus, SIGNAL(currentIndexChanged(int)), this, SLOT(OnSetFilter()));
	m_pTraceToolBar->addWidget(m_pTraceStatus);

	if (bStandAlone)
		m_pAllBoxes = NULL;
	else {
		m_pAllBoxes = m_pTraceToolBar->addAction(CSandMan::GetIcon("All"), tr("Show All Boxes"), this, SLOT(OnSetFilter()));
		m_pAllBoxes->setCheckable(true);
		m_pAllBoxes->setChecked(theConf->GetBool("Options/UseLogTree"));
	}

	m_pTraceToolBar->addSeparator();

	m_pSaveToFile = m_pTraceToolBar->addAction(CSandMan::GetIcon("Save"), tr("Save to file"), this, SLOT(SaveToFile()));

	m_pMainLayout->setSpacing(0);

	m_pMainLayout->addWidget(m_pTraceToolBar);


	m_pView = new QWidget(this);
	m_pLayout = new QStackedLayout(m_pView);
	
	m_pTrace = new CTraceTree(this);
	m_pTrace->m_pTraceModel->SetTree(m_pTraceTree->isChecked());

	if (bStandAlone) {
		QAction* pAction = new QAction(tr("Cleanup Trace Log"));
		connect(pAction, SIGNAL(triggered()), this, SLOT(Clear()));
		m_pTrace->GetMenu()->insertAction(m_pTrace->GetMenu()->actions()[0], pAction);
		m_pTrace->GetMenu()->insertSeparator(m_pTrace->GetMenu()->actions()[0]);
	}

	m_pLayout->addWidget(m_pTrace);

	QObject::connect(m_pTrace, SIGNAL(FilterChanged()), this, SLOT(OnFilterChanged()));

	m_pMonitor = new CMonitorList(this);
	m_pMonitor->m_pMonitorModel->SetObjTree(m_pObjectTree->isChecked());
	m_pLayout->addWidget(m_pMonitor);

	m_pView->setLayout(m_pLayout);
	m_pMainLayout->addWidget(m_pView);

	OnSetMode();
	
	m_uTimerID = startTimer(1000);
}

CTraceView::~CTraceView()
{
	killTimer(m_uTimerID);
}

void CTraceView::timerEvent(QTimerEvent* pEvent)
{
	if (pEvent->timerId() != m_uTimerID)
		return;

	Refresh();
}

void CTraceView::Refresh()
{
	QList<CSandBoxPtr>Boxes;
	if(m_pAllBoxes && !m_pAllBoxes->isChecked())
		Boxes = theGUI->GetBoxView()->GetSelectedBoxes();
	
	if (m_pCurrentBox != (Boxes.count() == 1 ? Boxes.first().data() : NULL)) {
		m_pCurrentBox = Boxes.count() == 1 ? Boxes.first().data() : NULL;
		m_FullRefresh = true;
	}

	bool bMonitorMode = m_pMonitorMode->isChecked();

	if (m_FullRefresh) 
	{
		m_LastID = 0;
		m_LastCount = 0;
		m_PidMap.clear();

		quint64 start = GetCurCycle();
		m_pTrace->m_pTraceModel->Clear();
		qDebug() << "Clear took" << (GetCurCycle() - start) / 1000000.0 << "s";

		m_pMonitor->m_pMonitorModel->Clear();
		m_FullRefresh = false;
	}

	const QVector<CTraceEntryPtr> &ResourceLog = theAPI->GetTrace();

	bool bUpdateFilters = false;

	int i = 0;
	if (ResourceLog.count() >= m_LastCount && m_LastCount > 0)
	{
		i = m_LastCount - 1;
		if (m_LastID == ResourceLog.at(i)->GetUID())
			i++;
		else
			i = 0;
	}

	if (i == 0) {
		m_PidMap.clear();
		m_TraceList.clear();
		m_MonitorMap.clear();
	}

	if (m_LastCount == ResourceLog.count())
		return;

	//bool bHasFilter = !m_pTrace->m_FilterExp.pattern().isEmpty();
	bool bHasFilter = !m_pTrace->m_FilterExp.isEmpty();

	quint64 start = GetCurCycle();
	for (; i < ResourceLog.count(); i++)
	{
		const CTraceEntryPtr& pEntry = ResourceLog.at(i);

		SProgInfo& Info = m_PidMap[pEntry->GetProcessId()];
		if (Info.Name.isEmpty()) {
			Info.Name = pEntry->GetProcessName();
			bUpdateFilters = true;
		}
		if (!Info.Threads.contains(pEntry->GetThreadId())) {
			Info.Threads.insert(pEntry->GetThreadId());
			bUpdateFilters = true;
		}

		if (m_pCurrentBox != NULL && m_pCurrentBox != pEntry->GetBoxPtr())
			continue;

		if (m_FilterPid != 0 && m_FilterPid != pEntry->GetProcessId())
			continue;

		if (m_FilterTid != 0 && m_FilterTid != pEntry->GetThreadId())
			continue;

		if (!m_FilterTypes.isEmpty() && !m_FilterTypes.contains(pEntry->GetType()))
			continue;

		if (bMonitorMode)
		{
			CMonitorEntryPtr& pItem = m_MonitorMap[pEntry->GetName().toLower()];
			if (pItem.data() == NULL) {
				QString Name = pEntry->GetName();
				//if (Name.left(9).compare("\\REGISTRY", Qt::CaseInsensitive) == 0) {
				//	int pos = Name.indexOf("\\", 10);
				//	Name = Name.left(pos).toUpper() + Name.mid(pos);
				//}
				pItem = CMonitorEntryPtr(new CMonitorEntry(Name, pEntry->GetType()));
			}

			pItem->Merge(pEntry);
		}
		else
		{
			if (bHasFilter && !m_pTrace->m_bHighLight) {
				if (!pEntry->GetName().contains(m_pTrace->m_FilterExp, Qt::CaseInsensitive)
					&& !pEntry->GetMessage().contains(m_pTrace->m_FilterExp, Qt::CaseInsensitive)
					//&& !pEntry->GetTypeStr().contains(m_pTrace->m_FilterExp, Qt::CaseInsensitive) // don't filter on non static strings !!!
					//&& !pEntry->GetStautsStr().contains(m_pTrace->m_FilterExp, Qt::CaseInsensitive) // don't filter on non static strings !!!
					&& !pEntry->GetProcessName().contains(m_pTrace->m_FilterExp, Qt::CaseInsensitive))
						continue;
			}
	
			if (m_FilterStatus != 0) {
				if (pEntry->IsOpen()) {
					if (m_FilterStatus != 1) continue;
				} else if (pEntry->IsClosed()) {
					if (m_FilterStatus != 2) continue;
				} else if (pEntry->IsTrace()) {
					if (m_FilterStatus != 3) continue;
				} else {
					if (m_FilterStatus != 4) continue;
				}
			}

			m_TraceList.append(pEntry);
		}
	}
	qDebug() << "Filtering took" << (GetCurCycle() - start) / 1000000.0 << "s";

	m_LastCount = ResourceLog.count();
	if(m_LastCount)
		m_LastID = ResourceLog.last()->GetUID();

	if (bUpdateFilters && !m_bUpdatePending)
	{
		m_bUpdatePending = true;
		QTimer::singleShot(500, this, SLOT(UpdateFilters()));
	}


	if (bMonitorMode)
	{
		QList<QModelIndex> NewBranches = m_pMonitor->m_pMonitorModel->Sync(m_MonitorMap, this);

		if (m_pMonitor->m_pMonitorModel->IsObjTree())
		{
			QTimer::singleShot(100, this, [this, NewBranches]() {
				CSortFilterProxyModel* pSortProxy = m_pMonitor->m_pSortProxy;
				foreach(const QModelIndex& Index, NewBranches) {
					m_pMonitor->GetTree()->expand(pSortProxy->mapFromSource(Index));
				}
			});
		}
	}
	else
	{
		if (m_pTrace->m_bHighLight)
			m_pTrace->m_pTraceModel->SetHighLight(m_pTrace->m_FilterExp);
		else
			m_pTrace->m_pTraceModel->SetHighLight(QString());

		quint64 start = GetCurCycle();
		QList<QModelIndex> NewBranches = m_pTrace->m_pTraceModel->Sync(m_TraceList);
		qDebug() << "Sync took" << (GetCurCycle() - start) / 1000000.0 << "s";

		if (m_pTrace->m_pTraceModel->IsTree())
		{
			QTimer::singleShot(100, this, [this, NewBranches]() {
				quint64 start = GetCurCycle();
				foreach(const QModelIndex& Index, NewBranches)
					m_pTrace->GetTree()->expand(Index);
				qDebug() << "Expand took" << (GetCurCycle() - start) / 1000000.0 << "s";
			});
		}
	}
}

void CTraceView::Clear()
{
	m_pTracePid->clear();
	m_pTracePid->addItem(tr("[All]"), 0);

	m_pTraceTid->clear();
	m_pTraceTid->addItem(tr("[All]"), 0);

	theAPI->ClearTrace();
	m_pTrace->m_pTraceModel->Clear(true);
	m_pMonitor->m_pMonitorModel->Clear();
}

void CTraceView::AddAction(QAction* pAction)
{
	m_pTrace->GetMenu()->insertAction(m_pTrace->GetMenu()->actions()[0], pAction);
	m_pTrace->GetMenu()->insertSeparator(m_pTrace->GetMenu()->actions()[0]);

	m_pMonitor->GetMenu()->insertAction(m_pMonitor->GetMenu()->actions()[0], pAction);
	m_pMonitor->GetMenu()->insertSeparator(m_pMonitor->GetMenu()->actions()[0]);
}

void CTraceView::OnSetTree()
{
	m_pTrace->m_pTraceModel->SetTree(m_pTraceTree->isChecked());

	//m_pTrace->m_pTraceModel->Clear();

	m_FullRefresh = true;
	Refresh();
	//m_pTrace->GetTree()->expandAll();

	theConf->SetValue("Options/UseLogTree", m_pTraceTree->isChecked());
}

void CTraceView::OnSetMode()
{
	if (m_pMonitorMode->isChecked())
		m_pLayout->setCurrentIndex(1); // monitor
	else
		m_pLayout->setCurrentIndex(0); // trace

	m_pTraceTree->setEnabled(!m_pMonitorMode->isChecked());
	m_pObjectTree->setEnabled(m_pMonitorMode->isChecked());
	m_pTraceStatus->setEnabled(!m_pMonitorMode->isChecked());

	m_FullRefresh = true;
	Refresh();

	theConf->SetValue("Options/UseMonitorMode", m_pMonitorMode->isChecked());
}

void CTraceView::OnObjTree()
{
	m_pMonitor->m_pMonitorModel->SetObjTree(m_pObjectTree->isChecked());

	//m_pMonitor->m_pMonitorModel->Clear();

	m_FullRefresh = true;
	Refresh();
	//m_pTrace->GetTree()->expandAll();

	theConf->SetValue("Options/UseObjectTree", m_pObjectTree->isChecked());
}

void CTraceView::UpdateFilters()
{
	m_bUpdatePending = false;

	quint32 cur_pid = m_pTracePid->currentData().toUInt();

	QMap<quint32, SProgInfo> pids = m_PidMap;
	foreach(quint32 pid, pids.keys()) {
		SProgInfo& Info = pids[pid];

		if(m_pTracePid->findData(pid) == -1)
			m_pTracePid->addItem(tr("%1 (%2)").arg(Info.Name).arg(pid), pid);

		if (cur_pid != 0 && cur_pid != pid)
			continue;

		foreach(quint32 tid, Info.Threads) {
			if (m_pTraceTid->findData(tid) == -1)
				m_pTraceTid->addItem(tr("%1").arg(tid), tid);
		}
	}
}

void CTraceView::OnFilterChanged()
{
	m_FullRefresh = true;
}

void CTraceView::OnSetPidFilter()
{
	m_FilterPid = m_pTracePid->currentData().toUInt();
	m_FilterTid = 0;
	//m_pSortProxy->m_FilterPid = m_pTracePid->currentData().toUInt();
	//m_pSortProxy->m_FilterTid = 0;

	QTimer::singleShot(100, this, [this]() {

		m_pTraceTid->clear();
		m_pTraceTid->addItem(tr("[All]"), 0);

		UpdateFilters();
	});

	//m_pSortProxy->setFilterKeyColumn(m_pSortProxy->filterKeyColumn());
	m_FullRefresh = true;
	//if(!m_pMonitorMode->isChecked())
	//	m_pTrace->GetTree()->expandAll();
}

void CTraceView::OnSetTidFilter()
{
	//m_FilterTid = m_pTraceTid->currentData().toUInt();
	m_FilterTid = m_pTraceTid->currentText().toUInt();
	//m_pSortProxy->m_FilterTid = m_pTraceTid->currentData().toUInt();

	//m_pSortProxy->setFilterKeyColumn(m_pSortProxy->filterKeyColumn());
	m_FullRefresh = true;
	//if(!m_pMonitorMode->isChecked())
	//	m_pTrace->GetTree()->expandAll();
}


void CTraceView::OnSetFilter()
{
	m_FilterTypes.clear();
	for (int i = 0; i < m_pTraceType->count(); i++) {
		if (m_pTraceType->itemData(i, Qt::CheckStateRole).toInt() == Qt::Checked) {
			m_FilterTypes.append(m_pTraceType->itemData(i, Qt::UserRole + 1).toUInt());
		}
	}

	m_FilterStatus = m_pTraceStatus->currentData().toUInt();

	m_FullRefresh = true;
	//if(!m_pMonitorMode->isChecked())
	//	m_pTrace->GetTree()->expandAll();
}


void CTraceView::SaveToFile()
{
	QString Path = QFileDialog::getSaveFileName(this, tr("Save trace log to file"), "", QString("Log files (*.log)")).replace("/", "\\");
	if (Path.isEmpty())
		return;

	QFile File(Path);
	if (!File.open(QFile::WriteOnly)) {
		QMessageBox::critical(this, "Sandboxie-Plus", tr("Failed to open log file for writing"));
		return;
	}

	if (m_pMonitorMode->isChecked())
	{
		QList<QStringList> Rows = m_pMonitor->DumpPanel();
		foreach(const QStringList& Row, Rows)
			File.write(Row.join("\t").toLatin1() + "\n");
	}
	else
	{
		const QVector<CTraceEntryPtr> &ResourceLog = theAPI->GetTrace();
		for (int i = 0; i < ResourceLog.count(); i++)
		{
			const CTraceEntryPtr& pEntry = ResourceLog.at(i);

			QStringList Line;
			Line.append(QDateTime::fromMSecsSinceEpoch(pEntry->GetTimeStamp()).toString("hh:mm:ss.zzz"));
			QString Name = pEntry->GetProcessName();
			Line.append(Name.isEmpty() ? tr("Unknown") : Name);
			Line.append(QString("%1").arg(pEntry->GetProcessId()));
			Line.append(QString("%1").arg(pEntry->GetThreadId()));
			Line.append(pEntry->GetTypeStr());
			Line.append(pEntry->GetStautsStr());
			Line.append(pEntry->GetName());
			Line.append(pEntry->GetMessage());

			File.write(Line.join("\t").toLatin1() + "\n");
		}
	}

	File.close();
}


////////////////////////////////////////////////////////////////////////////////////////
// CTraceWindow

CTraceWindow::CTraceWindow(QWidget *parent)
	: QDialog(parent)
{
	Qt::WindowFlags flags = windowFlags();
	flags |= Qt::CustomizeWindowHint;
	//flags &= ~Qt::WindowContextHelpButtonHint;
	//flags &= ~Qt::WindowSystemMenuHint;
	//flags &= ~Qt::WindowMinMaxButtonsHint;
	//flags |= Qt::WindowMinimizeButtonHint;
	//flags &= ~Qt::WindowCloseButtonHint;
	flags &= ~Qt::WindowContextHelpButtonHint;
	//flags &= ~Qt::WindowSystemMenuHint;
	setWindowFlags(flags);

	this->setWindowTitle(tr("Sandboxie-Plus - Trace Monitor"));

	bool bAlwaysOnTop = theConf->GetBool("Options/AlwaysOnTop", false);
	this->setWindowFlag(Qt::WindowStaysOnTopHint, bAlwaysOnTop);

	QGridLayout* pLayout = new QGridLayout();
	pLayout->setContentsMargins(3,3,3,3);
	pLayout->addWidget(new CTraceView(true, this), 0, 0);
	this->setLayout(pLayout);

	restoreGeometry(theConf->GetBlob("TraceWindow/Window_Geometry"));
}

CTraceWindow::~CTraceWindow()
{
	theConf->SetBlob("TraceWindow/Window_Geometry", saveGeometry());

	if(!theAPI) theAPI->EnableMonitor(false);
}

void CTraceWindow::closeEvent(QCloseEvent *e)
{
	emit Closed();
	this->deleteLater();
}

