import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useGlobalStore } from '../Context/ContextProvider';
import { okaidia } from '@uiw/codemirror-theme-okaidia';
import ClipLoader from "react-spinners/ClipLoader";
import CodeMirror from "@uiw/react-codemirror";
import Status from "../Status"

const responseTabs = [
    {
        slug: 'Response Body',
        title: 'Response Body',
    },
    {
        slug: 'Response Header',
        title: 'Response Header',
    },
];

const ResponseBody = ({loading}) => {

    const {state} = useGlobalStore()
    
    return (
        <Tabs forceRenderTabPanel selectedTabClassName="border-b-2 text-orange-600">
                <TabList className="flex border border-gray-300 rounded-t-lg ">
                    {responseTabs.map((tab) => (
                        <Tab className="mr-3 py-2 px-4 border-orange-400 focus:outline-none 
                        hover:text-orange-500 cursor-pointer" 
                        key={tab.slug}>
                        {tab.title}
                        </Tab>
                ))}
                <Status state={state}/>
                </TabList>

                <TabPanel className="react-tabs__tab-panel px-4 py-4 rounded-b-lg border border-t-0 border-gray-300" >
                    {loading ? <ClipLoader color="#36d7b7" /> : <CodeMirror className="CodeMirror" theme={okaidia}  value={state.responseFormData.body}  />}
                </TabPanel>
                
                <TabPanel className="react-tabs__tab-panel px-4 py-4 rounded-b-lg border border-t-0 border-gray-300" >
                    <CodeMirror theme={okaidia} />
                </TabPanel>
        </Tabs>
)
}

export default ResponseBody
