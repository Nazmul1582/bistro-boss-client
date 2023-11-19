import { useState } from "react";
import image from "../../assets/shop/banner2.jpg";
import PageCover from "../Shared/PageCover/PageCover";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useParams } from "react-router-dom";

const Order = () => {
    const menuItems = ["salad", "pizza", "soup", 'dessert', 'drinks']
    const { category } = useParams();
    const initialValue = menuItems.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialValue);

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