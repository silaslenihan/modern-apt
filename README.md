# CS390 Modern APT Project:

### Annie Sawers **aks104** | Silas Lenihan **sjl58**

#### **Date Started:** 1/18/23

#### **Date Finished:** 2/1/23

#### **Hours worked:** ~20 hours each

### Resources Consulted:

- [ChatGPT](chat.openai.com) - mainly for styling questions
- [RsuiteJS](https://rsuitejs.com/) For components and some icons
- [W3 Schools](https://www.w3schools.com/)

#### **How to run:** See [Getting Started](#getting-started)

## Prerequisites:

Have [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable) installed on your computer:

```
npm install --global yarn
```

#### **Disclaimer:** The APTs in this project are not actually connected to the Duke APT system backend, but rather they rely on mock data found in the `mock_data` folder. Additionally, for the scope of this project we didn't have a database, so past submissions aren't stored. Ideally we would store this.

## Noteworthy Features:

- Overall APT progress bar and individual progress circle clearly indicated
- Overdue assignments turn red until they are completed to encourage finishing them.
- Completed assignements are green to reward the user.
- APTs are sorted by date.
- The current date is expanded to draw the attention of the student.
- How do APTs work? Will display a multi panel carousel animation explaining what's going on behind the scenes to reveal the inner workings of the APT backend.
- Inline VsCode code editor on the APT page.
- Stylized problem statement.
- Intuitive, split scrollable design.
- Embedded visualizer to step through code and help students understand how the code is executing.
- Seperate console so students can debug their code easily.
- Stylzied results section showing the outcome of running the code against the test cases.

## Descisions:

- We wanted to start from scratch for a few reasons. For one, it allows us to be more comfortable with the development environment, using a framework we are much more familiar with. Secondly, it gave us control over the overall design of the project, not having to backtrack in the example code. Lastly, we thought it would be more fun and satisfying to build it from scratch!
- We decided to make it as simple as possible, so that middle schoolers and college students alike could use it for their respective levels of complexity.
- We wanted to focus on how to minimize interaction with the interface as much as possible, allowing users to interact directly with the task at hand - completing their APTs.
- We decided against adding a "code upload" feature because for this simplified (CS 101) site, we wanted them to focus on just writing the code. Ideally in this class, the projects would teach them how to set up a coding environment. We also have the "How APTs work" section to explain how the code is actually run.
- Additionally, the console and visualizer components add for greater exposure to how the code is actually being run.
- We chose 3 colors, green, red, blue to base the entire interface off of.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Install dependencies:

```
yarn install
```

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
