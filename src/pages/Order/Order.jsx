import { useState } from "react";
import image from "../../assets/shop/banner2.jpg";
import PageCover from "../Shared/PageCover/PageCover";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Order = () => {
    const [tabIndex, setTabIndex] = useState(0);
    return (
        <>
            <PageCover title="Order Food" img={image} />
            <section className="pt-20">
                <div className="container mx-auto flex justify-center">
                    <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                        <TabList>
                            <Tab>Salad</Tab>
                            <Tab>Pizza</Tab>
                            <Tab>Soups</Tab>
                            <Tab>Desserts</Tab>
                            <Tab>Drinks</Tab>
                        </TabList>
                        <TabPanel></TabPanel>
                        <TabPanel></TabPanel>
                        <TabPanel></TabPanel>
                        <TabPanel></TabPanel>
                        <TabPanel></TabPanel>
                    </Tabs>
                </div>
            </section>
        </>
    )
}

export default Order