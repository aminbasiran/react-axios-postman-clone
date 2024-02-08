import CodeMirror from "@uiw/react-codemirror";
import Params from '../Params';
import Headers from '../Headers';
import AddKeyValueButton from '../AddKeyValueButton';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useGlobalStore } from '../Context/ContextProvider';


const requestTabs = [
    {
        slug: 'query-params',
        title: 'Query Params',
    },
    {
        slug: 'headers',
        title: 'Headers',
    },
    {
        slug: 'body',
        title: 'Body',
    },
];

const RequestBody = () => {

    const {state,dispatch,actionTypes} = useGlobalStore()
    
    return (
        <Tabs forceRenderTabPanel selectedTabClassName="border-b-2 text-orange-600">
                <TabList className="flex border border-gray-300 rounded-t-lg">
                    {requestTabs.map((tab) => (
                        <Tab className="mr-3 py-2 px-4 border-orange-400 focus:outline-none 
                        hover:text-orange-500 cursor-pointer" 
                        key={tab.slug}>
                        {tab.title}
                        </Tab>
                ))}
                </TabList>

                <TabPanel className="react-tabs__tab-panel px-4 py-4 rounded-b-lg border border-t-0 border-gray-300" >
                    <div className='flex flex-col'>
                        {state.requestFormData.params.map((each)=><Params  key={each.id} id={each.id}/>)}
                        <AddKeyValueButton action={actionTypes.ADD_REQUEST_PARAMS} dispatch={dispatch}/>
                    </div>
                </TabPanel>
                <TabPanel className="react-tabs__tab-panel px-4 py-4 rounded-b-lg border border-t-0 border-gray-300" >
                    <div className='flex flex-col'>
                        {state.requestFormData.headers.map((each)=><Headers  key={each.id} id={each.id}/>)}
                        <AddKeyValueButton action={actionTypes.ADD_REQUEST_HEADERS} dispatch={dispatch}/>

                    </div>
                </TabPanel>
                <TabPanel className="react-tabs__tab-panel px-4 py-4 rounded-b-lg border border-t-0 border-gray-300" >
                    <CodeMirror/>
                </TabPanel>
            </Tabs>
    )
}

export default RequestBody
