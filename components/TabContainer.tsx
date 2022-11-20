import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import PhoneIcon from '@material-ui/icons/Phone'
import FavoriteIcon from '@material-ui/icons/Favorite'
import PersonPinIcon from '@material-ui/icons/PersonPin'
import HelpIcon from '@material-ui/icons/Help'
import ShoppingBasket from '@material-ui/icons/ShoppingBasket'
import Box from '@material-ui/core/Box'
import Link from 'next/link'

interface TabPanelProps {
  children?: React.ReactNode
  index: any
  value: any
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <p>{children}</p>
        </Box>
      )}
    </div>
  )
}

function a11yProps(index: any) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  }
}

const TabContainer = () => {
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue)
  }

  return (
    <section className='w-full py-6 md:py-14'>
      <div className='max-w-5xl mx-auto p-4'>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="on"
            indicatorColor="primary"
            textColor="primary"
            aria-label="scrollable force tabs example"
          >
            <Tab label="Item One" icon={<PhoneIcon />} {...a11yProps(0)} />
            <Tab label="Item Two" icon={<FavoriteIcon />} {...a11yProps(1)} />
            <Tab label="Item Three" icon={<PersonPinIcon />} {...a11yProps(2)} />
            <Tab label="Item Four" icon={<HelpIcon />} {...a11yProps(3)} />
            <Tab label="Item Five" icon={<ShoppingBasket />} {...a11yProps(4)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <br />
          The Rothschild family has an investing history dating back more than two centuries - particularly for backing entrepreneurs who the family felt were ahead of their times.
          At Merchant Banking we celebrate this legacy. So much so that a passion for investing is the single most important attribute we seek in our people. And we expend significant energy in ensuring that it remains the heart of our culture.
          <br /><br />
          <Link href='www.niosoapp.com' className="text-center duration-300 hover:text-orange-700 hover:underline underline-offset-2">www.niosoapp.com</Link>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <br />
          Our investing ethos is centered on delivering attractive risk-adjusted returns to our investors. We are convinced that this is the only way to consistently create long-term value.
          This approach is borne out of a long-held Rothschild & Co philosophy of wealth preservation through active avoidance of capital impairment.
          Respect for risk does not mean we shun it - rather, this mindset reflects the importance we attach to a proper understanding, quantification and pricing of risk.
          <br /><br />
          <Link href='www.niosoapp.com' className="text-center duration-300 hover:text-orange-700 hover:underline underline-offset-2">www.niosoapp.com</Link>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <br />
          We aim to form close, enduring relationships with each of our stakeholders: our investors, our managers, our people, our advisers and financiers, and broadly the environment in which we work.
          <br /><br />
          <Link href='www.niosoapp.com' className="text-center duration-300 hover:text-orange-700 hover:underline underline-offset-2">www.niosoapp.com</Link>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <br />
          We invest significant amounts of capital alongside our investors in each of our funds. We actively encourage our managers to invest alongside us in the companies they run - and make it profitable and easy for them to do so. And we do the same for each of our investing professionals.
          <br /><br />
          <Link href='www.niosoapp.com' className="text-center duration-300 hover:text-orange-700 hover:underline underline-offset-2">www.niosoapp.com</Link>
        </TabPanel>
        <TabPanel value={value} index={4}>
          <br />
          By ensuring that we all "put our money where our mouth is", we hope to create a close-knit ecosystem where all of our interests are fully aligned. Our aspiration is to have a culture of partnership with a shared sense of purpose and level of collaboration in every important decision we make.
          <br /><br />
          <Link href='www.niosoapp.com' className="text-center duration-300 hover:text-orange-700 hover:underline underline-offset-2">www.niosoapp.com</Link>
        </TabPanel>
      </div>
    </section>
  )
}

export default TabContainer