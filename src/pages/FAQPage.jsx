import { useState } from 'react';
import Sidebar from '../FAQ/Sidebar.jsx';
// import FAQList from '../FAQ/FAQList.jsx';


const FAQs = {
  'All Category': [
    {
        question: " How to change the registered mobile/email through which the license has been generated?",
        answer: "First you need to probe the customer whether he has the current registered mobile/email . If he has registered mobile number then you have to inform him to go to our website and then update the profile. Else it cannot be changed but with the help of payment verification we can help the customer to attach license."
      },
      {
        question: " How to change terms and conditions in Vyapar app?",
        answer: "Go to Vyapar app>>in the left side Click on “Settings”>> Go to “print settings”>> Scroll down a little you will get a option under “Footer” heading “Terms and conditions”>>Update the terms and conditions as per the transaction type” >>after updating click on “Save and Close”"
      },
      {
        question:" How to add signature in Vyapar app?",
        answer:"Go to Vyapar app>> Click on “My company”>>In the drop down click on “More information”>> down below you will get the option to add your signature>> after adding click on “save”"
      },
      {
        question:" How to add freight charges in Vyapar?",
        answer:"Go to Vyapar app>>in the left side click on “Settings”>> Go to “Transaction Settings”>> down below click on “Additional Charges”>>Enable the Checkbox >>Update one of the field name as Freight Charges>> Click on “Save”"
      },
      {
        question:" How to add bank details in the Vyapar app?",
        answer: "Go to Vyapar app>> in the left hand side click on “Cash & Bank”>>In the drop down Click on Bank account>>Click on “Add bank account” or “add New bank account”>>Update bank details>>Click on Save Note:- If you want your bank account details to get printed on invoice or generate QR code you can enable the given checkbox for both the feature"
      },
      {
        question:" Is Vyapar app free for pc?",
        answer:"After installing Vyapar you will get a 7 days free trial. In that free trial you can have access to all premium features that have been provided by Vyapar app."
      },
      {
        question:" How to update the Vyapar app on pc?",
        answer: "Open Vyapar app on your PC >> at top Left corner click on 'Help' >> Click on 'Check for updates' >> If there are any updates it will ask for permission to update the software in the background. Once the software is updated, It will again ask for permission to 'Restart' the software. Note : While updating the software in Background don't close the software."
      },
      {
        question:" Vyapar App Customer Care Number?",
        answer:"Vyapar app customer care number is (+91) 93339 11911 and customer WhatsApp number is (+91) 63668 27420"
      },
      {
        question:" How can I print bank details in invoice?",
        answer:"To print bank details in invoice you have to go to cash and bank > bank account > Select bank account > Edit bank account > enable 'print this bank account details on invoices'."
      },
      {
        question:" How to see previous year data?",
        answer:"A backup of your previous year data will be created in your device/google-drive at the time of closing book. Restore that file to your Vyapar App to see your previous year data."
    },
    {
        question:" Can I reset my invoice number back to 1?",
        answer:"Yes, you can! To reset your invoice number & other transactions, click on “Close Financial Year” from utilities. Under “Restart Transaction Numbers”, change prefixes for the invoice. This will reset your invoice number. NOTE: Not finding this option? Update to the latest version of Vyapar App"
    },
    {
        question:" Can I take invoice print with my Label Printer?",
        answer:"Yes! To print an invoice with a Label printer, you can enable it in the 'Print' option available in Settings."
    },
    {
        question:" How can I track the order details of 'My Online store'?",
        answer:"You will be notified via WhatsApp message and you can also find the online order details in the dedicated dashboard in Vyapar software."
    },
    {
        question:" Explain Both the options of Closing Financial Year.",
        answer:"1)change prefix:- only we have to enter prefix(eg:-2021-22/) and invoice should be start from 1, 2)start fresh:- everything will start from fresh and previous year closing balance will be carry forwarded as party opening balance..Previous year closing stock will become current year opening stock."
    },
    {
        question:" Can we sell online through Vyaparapp?",
        answer:"Yes, you can use the 'My Online Store' feature to share your item details to your customers and receive orders directly in Vyaprapp. You can find the option to activate the online store in the main menu."
    },
    {
        question:" How do we get notified of the online orders from the Vyapar online store?",
        answer:"You will receive a WhatsApp message along with in dedicated dashboard."
    },
    {
        question:" Can we do Party-to-Party balance transfer in Vyapar?",
        answer:"Yes. You can find this option under more transactions."
    },
    {
        question:" Can we generate Barcode in Vyapar software?",
        answer:"Yes, you can generate a barcode. The option can be located under 'Utilities' in main menu."
    },
    {
        question:" I am a licensed user. But, why am I asked to buy license again?",
        answer:"This usually happens when you - Change your mobile device, or - Update your software. In these two cases you're asked to buy license again. From menu, click on ''Vyapar Premium'' & note down the device ID, now, click on ''Already have a license?'' , login with your registered email ID & password and opt for ''Change Option'' & select the device ID which you noted in the beginning. You are successfully logged in as a licensed user."
    },
    {
        question:" How can I manage user permission?",
        answer:"You can enable user-role permission from settings."
    },
    {
        question:" How to generate pdf of outstanding bills?",
        answer:"You can generate outstanding bill list by filtering the unpaid ones from 'all transactions report'."
    },
    {
        question:" How to get input from weighing scale?",
        answer:"We do not have this option yet!"
    },
    {
        question:" Can we do Item grouping in Vyapar?",
        answer:"'Yes! Vyapar lets you create different categories for your items. This can be enabled in your item settings.'"
    },
    {
        question:" Does closing stock include GST?",
        answer:"Closing stock is exclusive of tax now. Only in case of a composition dealer, the stock will be inclusive of tax since he will not be able to avail ITC on his purchases."
    },
    {
        question:" How to add packaging charge in bill?",
        answer:"Yes, you can add any amount of 'Additional Charge' in the bill. You can enable it in transaction settings."
    },
    {
        question:" Can we connect Mobile App data with Desktop App?",
        answer:"Yes, by enabling 'Auto Sync' option, you can synchronize mobile data with desktop."
    },
    {
        question: " What are the modes of payment for purchasing Vyapar?",
        answer: "UPI, Net Banking, Bank transfer for Indian customers. For international customers : Paypal, Skrill, WIRE transfer."
      },
      {
        question: " Where can I find the pricing details?",
        answer: "You can click on the below link to check for the pricing. https://vyaparapp.in/pricing"
      },
    {
        question:" How can I check creditor/debitor list?",
        answer:"Check all parties report in report section and filter for receivables or payables based on your requirement."
    },
    {
        question:" How to enter Waste Quantity?",
        answer:"Waste quantity can be reflected through 'Adjust item' option. Number of wasted items can be reduced from available items to depict the loss."
    },
    {
        question:" Is Vyapar Cloud/Web-based?",
        answer:"Vyapar is still in process of launching this service, we will update on this as soon as we start."
    },
    {
        question:' How to become a distributor of Vyapar?',
        answer:'Visit our website and register to become the partner. Our team will get back to client within 48 hours. https://vyaparapp.in/distributor/create'
       },
    {
        question:" Can I upload Tally data into Vyapar App?",
        answer:"Yes!! You can find the option import to Tally' under the main-menu >> utilities."
    },
    {
        question:" Can I export vyapar data into tally?",
        answer:"Yes! You can find the option 'export to Tally' under main-menu >> utilities."
    },
    {
        question:" I'm a Manufacturer. Can I use Vyapar App?",
        answer:"Yes, manufacturing business can use Vyapar App to manage their business , however certain features for manufacturing industry is still in making."
    },
    {
        question:" How to do entry of bad debt ?",
        answer:"Enable the discount during payments , mention the amount in discount field of payment in/payment out"
    },
    {
        question:" How can I print bank details in invoice?",
        answer:"To print bank details in invoice you have to go to cash and bank > bank account > Select bank account > Edit bank account > enable 'print this bank account details on invoices'."
    },
    {
        question:" Vyapar App Customer Care Number?",
        answer:"Vyapar app customer care number is (+91) 93339 11911 and customer WhatsApp number is (+91) 63668 27420"
    },
    {
        question:" How to update the Vyapar app on pc?",
        answer:"Open Vyapar app on your PC >> at top Left corner click on 'Help' >> Click on 'Check for updates' >> If there are any updates it will ask for permission to update the software in the background. Once the software is updated, It will again ask for permission to 'Restart' the software. Note : While updating the software in Background don't close the software."
    },
    {
        question:" Is Vyapar app free for pc?",
        answer:"After installing Vyapar you will get a 7 days free trial. In that free trial you can have access to all premium features that have been provided by Vyapar app."
    },
    {
        question:" How to add bank details in the Vyapar app?",
        answer:"Go to Vyapar app>> in the left hand side click on “Cash & Bank”>>In the drop down Click on Bank account>>Click on “Add bank account” or “add New bank account”>>Update bank details>>Click on Save Note:- If you want your bank account details to get printed on invoice or generate QR code you can enable the given checkbox for both the feature"
    },
    {
        question:" Do you provide training for a distributor?",
        answer:"Yes, we provide online training to our distributors. Also, any business/technical queries will be answered by us even later on."
       },
       {
        question:" Should I pay registration charges to become a distributor?",
        answer:"No! There is no registration fees to become a distributor of Vyapar"
       },
    {
        question:" How to add freight charges in Vyapar?",
        answer:"Go to Vyapar app>>in the left side click on “Settings”>> Go to “Transaction Settings”>> down below click on “Additional Charges”>>Enable the Checkbox >>Update one of the field name as Freight Charges>> Click on “Save”"
    },
    {
        question:" How to add signature in Vyapar app?",
        answer:"Go to Vyapar app>> Click on “My company”>>In the drop down click on “More information”>> down below you will get the option to add your signature>> after adding click on “save”"
    },
    ],
  'PRICING': [
      {
        question: " What are the modes of payment for purchasing Vyapar?",
        answer: "UPI, Net Banking, Bank transfer for Indian customers. For international customers : Paypal, Skrill, WIRE transfer."
      },
      {
        question: " Where can I find the pricing details?",
        answer: "You can click on the below link to check for the pricing. https://vyaparapp.in/pricing"
      },
    ],
    'PRODUCT(APP) RELATED':[
    {
        question:" How to see previous year data?",
        answer:"A backup of your previous year data will be created in your device/google-drive at the time of closing book. Restore that file to your Vyapar App to see your previous year data."
    },
    {
        question:" Can I reset my invoice number back to 1?",
        answer:"Yes, you can! To reset your invoice number & other transactions, click on “Close Financial Year” from utilities. Under “Restart Transaction Numbers”, change prefixes for the invoice. This will reset your invoice number. NOTE: Not finding this option? Update to the latest version of Vyapar App"
    },
    {
        question:" Can I take invoice print with my Label Printer?",
        answer:"Yes! To print an invoice with a Label printer, you can enable it in the 'Print' option available in Settings."
    },
    {
        question:" How can I track the order details of 'My Online store'?",
        answer:"You will be notified via WhatsApp message and you can also find the online order details in the dedicated dashboard in Vyapar software."
    },
    {
        question:" Explain Both the options of Closing Financial Year.",
        answer:"1)change prefix:- only we have to enter prefix(eg:-2021-22/) and invoice should be start from 1, 2)start fresh:- everything will start from fresh and previous year closing balance will be carry forwarded as party opening balance..Previous year closing stock will become current year opening stock."
    },
    {
        question:" Can we sell online through Vyaparapp?",
        answer:"Yes, you can use the 'My Online Store' feature to share your item details to your customers and receive orders directly in Vyaprapp. You can find the option to activate the online store in the main menu."
    },
    {
        question:" How do we get notified of the online orders from the Vyapar online store?",
        answer:"You will receive a WhatsApp message along with in dedicated dashboard."
    },
    {
        question:" Can we do Party-to-Party balance transfer in Vyapar?",
        answer:"Yes. You can find this option under more transactions."
    },
    {
        question:" Can we generate Barcode in Vyapar software?",
        answer:"Yes, you can generate a barcode. The option can be located under 'Utilities' in main menu."
    },
    {
        question:" I am a licensed user. But, why am I asked to buy license again?",
        answer:"This usually happens when you - Change your mobile device, or - Update your software. In these two cases you're asked to buy license again. From menu, click on ''Vyapar Premium'' & note down the device ID, now, click on ''Already have a license?'' , login with your registered email ID & password and opt for ''Change Option'' & select the device ID which you noted in the beginning. You are successfully logged in as a licensed user."
    },
    {
        question:" How can I manage user permission?",
        answer:"You can enable user-role permission from settings."
    },
    {
        question:" How to generate pdf of outstanding bills?",
        answer:"You can generate outstanding bill list by filtering the unpaid ones from 'all transactions report'."
    },
    {
        question:" How to get input from weighing scale?",
        answer:"We do not have this option yet!"
    },
    {
        question:" Can we do Item grouping in Vyapar?",
        answer:"'Yes! Vyapar lets you create different categories for your items. This can be enabled in your item settings.'"
    },
    {
        question:" Does closing stock include GST?",
        answer:"Closing stock is exclusive of tax now. Only in case of a composition dealer, the stock will be inclusive of tax since he will not be able to avail ITC on his purchases."
    },
    {
        question:" How to add packaging charge in bill?",
        answer:"Yes, you can add any amount of 'Additional Charge' in the bill. You can enable it in transaction settings."
    },
    {
        question:" Can we connect Mobile App data with Desktop App?",
        answer:"Yes, by enabling 'Auto Sync' option, you can synchronize mobile data with desktop."
    },
    {
        question:" How can I check creditor/debitor list?",
        answer:"Check all parties report in report section and filter for receivables or payables based on your requirement."
    },
    {
        question:" How to enter Waste Quantity?",
        answer:"Waste quantity can be reflected through 'Adjust item' option. Number of wasted items can be reduced from available items to depict the loss."
    },
    {
        question:" Is Vyapar Cloud/Web-based?",
        answer:"Vyapar is still in process of launching this service, we will update on this as soon as we start."
    },
    {
        question:" Can I upload Tally data into Vyapar App?",
        answer:"Yes!! You can find the option import to Tally' under the main-menu >> utilities."
    },
    {
        question:" Can I export vyapar data into tally?",
        answer:"Yes! You can find the option 'export to Tally' under main-menu >> utilities."
    },
    {
        question:" I'm a Manufacturer. Can I use Vyapar App?",
        answer:"Yes, manufacturing business can use Vyapar App to manage their business , however certain features for manufacturing industry is still in making."
    },
    {
        question:" How to do entry of bad debt ?",
        answer:"Enable the discount during payments , mention the amount in discount field of payment in/payment out"
    },
    {
        question:" How can I print bank details in invoice?",
        answer:"To print bank details in invoice you have to go to cash and bank > bank account > Select bank account > Edit bank account > enable 'print this bank account details on invoices'."
    },
    {
        question:" Vyapar App Customer Care Number?",
        answer:"Vyapar app customer care number is (+91) 93339 11911 and customer WhatsApp number is (+91) 63668 27420"
    },
    {
        question:" How to update the Vyapar app on pc?",
        answer:"Open Vyapar app on your PC >> at top Left corner click on 'Help' >> Click on 'Check for updates' >> If there are any updates it will ask for permission to update the software in the background. Once the software is updated, It will again ask for permission to 'Restart' the software. Note : While updating the software in Background don't close the software."
    },
    {
        question:" Is Vyapar app free for pc?",
        answer:"After installing Vyapar you will get a 7 days free trial. In that free trial you can have access to all premium features that have been provided by Vyapar app."
    },
    {
        question:" How to add bank details in the Vyapar app?",
        answer:"Go to Vyapar app>> in the left hand side click on “Cash & Bank”>>In the drop down Click on Bank account>>Click on “Add bank account” or “add New bank account”>>Update bank details>>Click on Save Note:- If you want your bank account details to get printed on invoice or generate QR code you can enable the given checkbox for both the feature"
    },
    {
        question:" How to add freight charges in Vyapar?",
        answer:"Go to Vyapar app>>in the left side click on “Settings”>> Go to “Transaction Settings”>> down below click on “Additional Charges”>>Enable the Checkbox >>Update one of the field name as Freight Charges>> Click on “Save”"
    },
    {
        question:" How to add signature in Vyapar app?",
        answer:"Go to Vyapar app>> Click on “My company”>>In the drop down click on “More information”>> down below you will get the option to add your signature>> after adding click on “save”"
    },
    ],
    'LICENSE RELATED':[
        {
         question:" Do you provide training for a distributor?",
         answer:"Yes, we provide online training to our distributors. Also, any business/technical queries will be answered by us even later on."
        },
        {
         question:" Should I pay registration charges to become a distributor?",
         answer:"No! There is no registration fees to become a distributor of Vyapar"
        },
    ],
    'DISTRIBUTOR':[
        {
         question:' How to become a distributor of Vyapar?',
         answer:'Visit our website and register to become the partner. Our team will get back to client within 48 hours. https://vyaparapp.in/distributor/create'
        },
    ],
    'REFUND':[
        {

        },
    ],
    'GST RELATED':[
        {

        },
    ],
    'EWB AND E-Invoicing':[
        {

        },
    ],
    'ONLINE STORE':[
        {

        },
    ],
};

const FAQPage = () => {
    const [activeCategory, setActiveCategory] = useState('All Category');
  
    const handleCategoryChange = (category) => {
      setActiveCategory(category);
    };
  
    return (
      <div className="flex">
        <Sidebar topics={Object.keys(FAQs)} onCategoryChange={handleCategoryChange} />
        <div className="flex-1 p-4">
          <h1 className="text-2xl font-bold mb-4">Frequently Asked Questions</h1>
          <div className="space-y-4">
            {FAQs[activeCategory].map((faq, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg p-4">
                <h2 className="font-semibold">{faq.question}</h2>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default FAQPage;