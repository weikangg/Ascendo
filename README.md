<h1 align="center"> :office: Ascendo</h1>

<p align="center">
  <img src="https://github.com/weikangg/Ascendo/assets/95838788/b1d2ec7b-3621-499f-9e28-42319dc0b24f" alt="Logo"/>
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

- **Register/Login:** Users can register for an account, receive a confirmation code to confirm sign-up and login with necessary authentication. This was implemented using AWS Cognito for authentication. <br/>
<div align="center">
    <img src="https://github.com/weikangg/Ascendo/assets/95838788/74bcf124-dda1-4b74-b1ca-dc52a4235cbe" alt="Register" width="200" />
    <img src="https://github.com/weikangg/Ascendo/assets/95838788/8daa425c-26ef-4d6a-85ae-f7f9600ef951" alt="RegisterConfirm" width="200" style="margin-left:20px;"/>
    <img src="https://github.com/weikangg/Ascendo/assets/95838788/1f0c6744-6fa4-4804-b461-57059555f59d" alt="Login" width="200" style="margin-left:20px;" />
</div>

- **Community:** Users can connect with people within or outside their department! They can also upload posts or images of their pets to share achievements and connect with others. <br/>
<div align="center">
    <img src="https://github.com/weikangg/Ascendo/assets/95838788/fa91f4c0-98cf-4229-9ecb-c6eea5c85f3d" alt="HomeCommunity" width="200" />
</div>

- **Tasks:** Managers can add and assign tasks to employees while employees can check off the tasks that they have completed and even check the history of their tasks. <br/>
<div align="center">
    <img src="https://github.com/weikangg/Ascendo/assets/95838788/be8bbc85-3fcd-4d60-9467-fa6a6c656be6" alt="Tasks" width="200" />
    <img src="https://github.com/weikangg/Ascendo/assets/95838788/54b92c3e-8405-4b75-8329-9b1232824dea" alt="TasksAdd" width="200" style="margin-left:20px"; />
</div>

- **Games:** Users can play games with their team members to earn points and rewards before lunch time daily! Different games will be implemented for different departments within the organisation. Future improvements include an RPG game / 3D world for users to move their avatars and pets around to interact with other team members and complete certain quests together to earn the relevant points, thus improving team cohesion and fosters interaction.  <br/>

<div align="center">
    <img src="https://github.com/weikangg/Ascendo/assets/95838788/e8a9b14e-5b11-4836-a56c-49e440caf2d2" alt="GameLobby" width="200" />
    <img src="https://github.com/weikangg/Ascendo/assets/95838788/6be63b52-56db-4d97-abf8-f0f79f7fcde3" alt="GameCharades" width="200" style="margin-left:20px"; />
</div>

- **Gacha Capsule**: Users can spend the points they earn through completing tasks and winning team games on our gacha capsule to stand a chance at earning the legendary pet, the Snow Cat. Further improvements include evolving the pets and making the pets grow as they are fed. Pet food can be bought through a shop.<br/>
<div align="center">
    <img src="https://github.com/weikangg/Ascendo/assets/95838788/0c9ac14b-dddf-4058-a8df-429c5f63c56e" alt="Gacha " width="200"  />
    <img src="https://github.com/weikangg/Ascendo/assets/95838788/e0f94627-57da-47a1-9a6e-54afec976271" alt="GachaPrize" width="200" style="margin-left:20px"; />
</div>

- **Rewards**: Users can also spend the points they earn on redeeming real-life rewards if they desire.<br/>
<div align="center">
    <img src="https://github.com/weikangg/Ascendo/assets/95838788/7eb42353-4f5f-494b-97c3-ba6472ea2af6" alt="Rewards " width="200"  />
    <img src="https://github.com/weikangg/Ascendo/assets/95838788/accb519c-5948-4b07-acde-1feb9e8f4a1f" alt="RewardsItem" width="200" style="margin-left:20px"; />
    <img src="https://github.com/weikangg/Ascendo/assets/95838788/d1c54be4-663e-481c-9920-2067fb7bfec5" alt="RewardsItemRedeem" width="200" style="margin-left:20px"; />
</div>

- **Chatbot**: The pet which the user acquires from the gacha machine acts as the chatbot for users to interact with it to answer questions, help employees plan their time as well as HR solutions for them (when they face problems but do not feel like they can turn to anyone). It can also be used to do some day-to-day admin tasks such as coming up with emails for the user to apply for leave.<br/>
<div align="center">
    <img src="https://github.com/weikangg/Ascendo/assets/95838788/231427e6-0a92-4991-93bf-ed37ff8a6d99" alt="ChatBot" width="200" />
</div>

- **User Profile**: Users will have their own avatar and pet, which they can gain experience points through completing tasks and winning team games as well to increase their levels on Ascendo. This is to allow users to gain a sense of satisfaction and to see some progress as they complete the tasks which will make it seem less mundane.<br/><br/>
<div align="center">
    <img src="https://github.com/weikangg/Ascendo/assets/95838788/0975fe96-9ead-4c9b-a69b-b2fa546dca91" alt="Profile" width="200"/>
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

<div align="center">
    <table>
        <thead>
            <tr>
                <th>Profile</th>
                <th>Name</th>
                <th>School</th>
                <th>Responsibilities</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><a href='https://github.com/weikangg' title='weikangg'> <img src='https://github.com/weikangg.png' height='50' width='50'/></a></td>
                <td>Wei Kang</td>
                <td>Nanyang Technological University (NTU)</td>
                <td>Frontend, Backend</td>
            </tr>
            <tr>
                <td><a href='https://github.com/kanetan4' title='kanetan4'> <img src='https://github.com/kanetan4.png' height='50' width='50'/></a></td>
                <td>Kane Tan</td>
                <td>Nanyang Technological University (NTU)</td>
                <td>Frontend, Backend</td>
            </tr>
            <tr>
                <td><a href='https://github.com/yuandjom' title='john'> <img src='https://github.com/yuandjom.png' height='50' width='50'/></a></td>
                <td>John Lim</td>
                <td>Nanyang Technological University (NTU)</td>
                <td>Frontend, Backend</td>
            </tr>
            <tr>
                <td><a href='https://github.com/kenfyxx' title='ken'> <img src='https://github.com/kenfyxx.png' height='50' width='50'/></a></td>
                <td>Ken Fong</td>
                <td>Nanyang Technological University (NTU)</td>
                <td>Frontend, Backend</td>
            </tr>
            <tr>
                <td><a href='https://github.com/soqoro' title='kane'> <img src='https://github.com/soqoro.png' height='50' width='50'/></a></td>
                <td>Sua Qi Rong</td>
                <td>Nanyang Technological University (NTU)</td>
                <td>Frontend, Backend</td>
            </tr>
        </tbody>
    </table>
</div>
