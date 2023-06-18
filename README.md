<h1 align="center"> :office: Ascendo</h1>

Ascendo is a two-pronged mobile application deployed in companies to revolutionize employee experience and enhance work efficiency through gamification, addressing the problem faced by organizations: low levels of meaningful connections among colleagues leading to inadequate fulfillment in the workplace.

<h2 align = "center"> :open_book: Table Of Contents </h2>

- [Prerequisites](#prerequisites) <br/>
- [Setup](#setup) <br/>
- [Key Features](#key-features) <br/>
- [FAQ](#faq) <br/>
- [Tech Stack](#tech-stack) <br/>
- [Contributors](#contributors) <br/>

<h2 align="center" id = "prerequisites"> :axe:	Prerequisites</h2>

#### Internet Connectivity Required
> Prerequsite software
* Operating System: Windows 10/11, macOS Catalina above
* Visual Studio Code
  + https://code.visualstudio.com/
* Node
  + https://nodejs.org/en/

> Prerequsite API Keys Required
* URA API 
  + https://www.ura.gov.sg/maps/api/#introduction <br/>
    a. Register for an account. Fill in NA for Company Name, and put in arbitrary URL (e.g. https://www.google.com) <br/>
    b. Go to your email and open the confirmation email titled 'URA Data Request - Approved'. <br/>
    c. Click on the link and the button to generate access key. <br/>
    d. Go back to your email and open the email titled 'URA Data Request - Access key'.  <br/>
    e. You should see your URA API key there which is required for PropertyIQ. **Do not lose this key!** <br/>
* Google Maps API
  + https://www.youtube.com/watch?v=OGTG1l7yin4 (Step-by-step tutorial on how to acquire API Key) <br/>
    a. Go to https://console.cloud.google.com. <br/>
    b. Create a new Project. Name it however you want. <br/>
    c. Open the sidebar, click **API & Services**, then click on **Library**. <br/>
    d. Search for or click on **Maps Javascript API**. <br/>
    e. Enable it. <br/>
    f. Open the sidebar again, click **API & Services**, then click on **Credentials**. <br/>
    g. Click on Create Credentials, then click on API Key. <br/>
    h. And you're done, that's the API key required for our Google Maps Services for PropertyIQ. **Do not lose this key!** <br/>
    
>Prerequsite (Others)
* Gmail App Password
  + https://myaccount.google.com/ <br/>

* Clone this project

<h2 align="center" id = "setup"> :hammer_and_wrench:	Setup</h2>

>Setup

Please follow carefully during the setup process. 



<h2 align="center" id = "key-features"> :old_key:	Key Features</h2>

- **Rewards:** Users can redeem valuable discounts and vouchers with their points! <br/><br/>
![rewards](https://github.com/weikangg/Ascendo/assets/95838788/cba1f51a-897c-4092-bd62-2a35248cd145)

- **Tasks:** Users can complete daily quests and challenges to collect their points! <br/><br/>
![tasks](https://github.com/weikangg/Ascendo/assets/95838788/09659b1e-b433-42ad-b86c-24f97bb82329)

- **Games:** Users can play games with their team members to earn points and rewards anytime! <br/><br/>
![games](https://github.com/weikangg/Ascendo/assets/95838788/4282d17f-a11f-42a9-80fc-45eaafca9068)

- **Community:** Users can Connect with people within or outside their department! <br/><br/>
![image](https://github.com/weikangg/Ascendo/assets/95838788/0d7e546f-3247-475e-ba2a-91199b960fc6)

<h2 align="center" id = "faq" > :question: FAQ</h2>

> <strong>1. How do I start the production server?</strong>
```
Run npx expo start in the terminal.
```

<h2 align="center" id = "tech-stack"> 🛠 Tech Stack:</h2>

<div align="center">
  <h3>Frontend</h3>
  <p>
    <a href="https://skillicons.dev">
      <img src="https://skillicons.dev/icons?i=js,react" />
    </a>
  </p>
  <h3>Backend</h3>
  <p>
    <a href="https://skillicons.dev">
      <img src="https://skillicons.dev/icons?i=dynamodb,aws" />
    </a>
  </p>
  <br />
</div>

<h2 align="center" id = "contributors"> :family_man_man_boy_boy: Contributors:</h2>

| Profile                                                                                                                            | Name             | School                                 | Responsibilities
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------- | -------------------------------------- | ------------------------------ |
| <a href='https://github.com/weikangg' title='weikangg'> <img src='https://github.com/weikangg.png' height='50' width='50'/></a>       | Wei Kang           | Nanyang Technological University (NTU) | Frontend, Backend |
