<h1 align="center"> :office: Ascendo</h1>

<p align="center">
  <img src="https://github.com/weikangg/Ascendo/assets/95838788/20c20659-a018-41c9-8bbe-1304c16e31af" alt="Logo"/>
</p>

Ascendo is a two-pronged, innovative mobile application aimed at enhancing employee experience and increasing work efficiency through the means of gamification. This application is especially designed to foster meaningful connections among colleagues, even in a remote work setting, thereby leading to increased satisfaction and fulfillment in the workplace. The premise behind Ascendo is simple yet powerful - Encourage employees to complete their tasks and foster interaction with their team members through engaging and fun-filled team games, thereby enriching their day-to-day experience at work.

By using Ascendo, organizations can address the pressing issue of social isolation in remote work settings and create a work environment that is not just productive, but also enjoyable, fulfilling, and meaningful. With Ascendo, we aim to revolutionize the employee experience and establish a vibrant work culture that truly motivates and engages employees.


<h2 align = "center"> :moneybag:	Value Proposition </h2>

1. <strong>Enhancing Social Interaction: </strong>

Addressing the prevailing issue of low levels of meaningful connections that contribute to social isolation, Ascendo incorporates the fun element of team games into the work routine. These short and engaging games can be played once a day, before lunchtime, serving as a breather from work and an opportunity for team members to interact and bond. By setting a specific time and limit to the gaming duration, we ensure that these activities offer a refreshing break without becoming a distraction.

2. <strong> Boosting Workplace Fulfillment: </strong>

Ascendo also addresses the lack of fulfillment in the workplace through a unique avatar and pet system. Employees earn experience points and rewards by completing tasks and participating in team games. These points can be redeemed for exclusive rewards or spent on our distinctive gacha machine to adopt a virtual pet. The high cost associated with obtaining a pet from the gacha machine is deliberate, promoting a balanced engagement where users are encouraged to complete more tasks or participate in team games without fostering an addictive gaming behavior. This system provides a tangible sense of achievement and adds a layer of personalization and fun to the daily work routine.

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
* Visual Studio Code
  + https://code.visualstudio.com/
* Node
  + https://nodejs.org/en/
* AWS Services
  + Create & Sign in to AWS Account.
  + Set-up CRUD Functionality using AWS Amplify, API Gateway, Lambda, DynamoDB. (https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-dynamo-db.html)
    
> Prerequsite API Keys Required
* OpenAI API 
  + https://platform.openai.com/account/api-keys <br/>
    a. Register for an OpenAI account. <br/>
    b. Go to https://platform.openai.com/account/billing/overview to set up paid account if no free credits.<br/>
    c. Click create new secret key. <br/>
    d. Paste secret key into .env file.  <br/>
* Clone this project

<h2 align="center" id = "setup"> :hammer_and_wrench:	Setup</h2>

>Setup

1. Open terminal in VS Code / Command Line.
2. cd to Ascendo folder.
3. Run the following commands:
```
npm i
npx expo start
```

<h2 align="center" id = "key-features"> :old_key:	Key Features</h2>

- **Register/Login:** Users can register for an account, receive a confirmation code to confirm sign-up and login with necessary authentication. This was implemented using AWS Cognito for authentication.
<div align="center">
    <img src="https://github.com/weikangg/Ascendo/assets/95838788/131ea3fb-77a0-4903-a38c-06626b522459" alt="Register" width="200" />
    <img src="https://github.com/weikangg/Ascendo/assets/95838788/a022e1f2-90c1-4f02-ac11-7d1b663c9ba3" alt="RegisterConfirm" width="200" style="margin-left:20px;"/>
    <img src="https://github.com/weikangg/Ascendo/assets/95838788/bf7f2b91-4318-499b-9e16-c764dff7dc98" alt="Login" width="200" style="margin-left:20px;" />
</div>

- **Community:** Users can connect with people within or outside their department! They can also upload posts or images of their pets to share achievements and connect with others. <br/><br/>
<div align="center">
    <img src="https://github.com/weikangg/Ascendo/assets/95838788/0d644c7c-1fef-4a8b-ac48-abaf9471ac20" alt="HomeCommunity" width="200" />
</div>

- **Tasks:** Managers can add and assign tasks to employees while employees can check off the tasks that they have completed and even check the history of their tasks.
<div align="center">
    <img src="https://github.com/weikangg/Ascendo/assets/95838788/b8c2a01e-bcdd-4812-9d62-2ce43d892d21" alt="Tasks" width="200" " />
    <img src="https://github.com/weikangg/Ascendo/assets/95838788/c87e6d5a-1d43-449f-95ea-1915933da016" alt="TasksAdd" width="200" style="margin-left:20px; />
</div>

- **Games:** Users can play games with their team members to earn points and rewards before lunch time daily! Different games will be implemented for different departments within the organisation. Future improvements include an RPG game / 3D world for users to move their avatars and pets around to interact with other team members and complete certain quests together to earn the relevant points, thus improving team cohesion and fosters interaction.  <br/><br/>

<div align="center">
    <img src="https://github.com/weikangg/Ascendo/assets/95838788/0dbc607f-456d-40b5-8a2f-c5044a029837" alt="GameLobby" width="200" " />
    <img src="https://github.com/weikangg/Ascendo/assets/95838788/c1007244-e5bb-4497-b188-921da34988ff" alt="GameCharades" width="200" style="margin-left:20px; />
</div>
      
- **Gacha Capsule**: Users can spend the points they earn through completing tasks and winning team games on our gacha capsule to stand a chance at earning the legendary pet, the Snow Cat. Further improvements include evolving the pets and making the pets grow as they are fed. Pet food can be bought through a shop.<br/><br/>
<div align="center">
    <img src="https://github.com/weikangg/Ascendo/assets/95838788/6db5fe5a-5025-4837-9f54-17bd873f7c1e" alt="Gacha " width="200" " />
    <img src="https://github.com/weikangg/Ascendo/assets/95838788/d9a7aa7c-aa14-4f2c-81d7-22ff34ceea04" alt="GachaPrize" width="200" style="margin-left:20px; />
</div>

- **Rewards**: Users can also spend the points they earn on redeeming real-life rewards if they desire.<br/><br/>
<div align="center">
    <img src="https://github.com/weikangg/Ascendo/assets/95838788/f04bcaa5-f605-4d4a-9c96-dbdeb4ba5695" alt="Rewards " width="200" " />
    <img src="https://github.com/weikangg/Ascendo/assets/95838788/e582bb64-9b95-41e8-b6b9-7d53098b5d8e" alt="RewardsItem" width="200" style="margin-left:20px; />
    <img src="https://github.com/weikangg/Ascendo/assets/95838788/7f1054c9-96ef-4544-a461-ff10af6220d2" alt="RewardsItemRedeem" width="200" style="margin-left:20px; />
</div>

- **Chatbot**: The pet which the user acquires from the gacha machine acts as the chatbot for users to interact with it to answer questions, help employees plan their time as well as HR solutions for them (when they face problems but do not feel like they can turn to anyone). It can also be used to do some day-to-day admin tasks such as coming up with emails for the user to apply for leave.<br/><br/>
<div align="center">
    <img src="https://github.com/weikangg/Ascendo/assets/95838788/72c5a932-4969-403f-a5d8-3819c814e0ff" alt="ChatBot" width="200" " />
</div>

- **User Profile**: Users will have their own avatar and pet, which they can gain experience points through completing tasks and winning team games as well to increase their levels on Ascendo. This is to allow users to gain a sense of satisfaction and to see some progress as they complete the tasks which will make it seem less mundane.<br/><br/>
<div align="center">
    <img src="https://github.com/weikangg/Ascendo/assets/95838788/bba2a32e-b02d-46ad-8659-e10a1fc16b44" alt="Profile" width="200" " />
</div>

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
| <a href='https://github.com/kanetan4' title='kanetan4'> <img src='https://github.com/kanetan4.png' height='50' width='50'/></a>       | Kane Tan           | Nanyang Technological University (NTU) | Frontend, Backend |
| <a href='https://github.com/yuandjom' title='john'> <img src='https://github.com/yuandjom.png' height='50' width='50'/></a>       | John Lim           | Nanyang Technological University (NTU) | Frontend, Backend |
| <a href='https://github.com/kanetan4' title='kane'> <img src='https://github.com/kane.png' height='50' width='50'/></a>       | Ken Fong           | Nanyang Technological University (NTU) | Frontend, Backend |
| <a href='https://github.com/kanetan4' title='kane'> <img src='https://github.com/kane.png' height='50' width='50'/></a>       | Sua Qi Rong          | Nanyang Technological University (NTU) | Frontend, Backend |
