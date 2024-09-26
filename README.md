# mealove - Because every meal deserves love

**A recipe manager made with love (Frontend Web Dev Bootcamp - Capstone Project)**

## Description

Mealove is a web application designed to help users manage their favorite recipes. Users can create, view, edit, and delete recipes. However, recipe editing and deletion are restricted to the logged-in recipe owner. The app features 10 main recipe categories for easy navigation and organization. Mealove aims to simplify the process of storing and sharing culinary creations, while offering personalized control for each user's content.

## Key Features

🍘 **Recipe Creation:** Users can add their own recipes, specifying ingredients, instructions, and category.

🍔 **Recipe Viewing:** Browse all recipes, organized into 10 main categories. (Meat, Fish, Veggy, Sweet, Brunch, Hot, Cold, Fruits, Drinks, Snacks)

🥐 **User Authentication:** Secure login system for registered users. (Google-Login)

🥩 **Recipe Ownership:** Users can edit or delete only their own recipes when logged in.

🍹 **Recipe Management:** Logged-in users can update or remove their own recipes.

🍨 **Responsive Design:** Optimized for seamless use across devices.

## Tech Stack:

[React](https://react.dev/) | [Next.js](https://nextjs.org/) | [Typescript](https://www.typescriptlang.org/) | [Cloudinary](https://cloudinary.com/) | [styled-components](https://styled-components.com/) | [Node.js](https://nodejs.org/en) | [SWR](https://swr.vercel.app/) | [NextAuth.js](https://next-auth.js.org/) | [MongoDB](https://www.mongodb.com/) | [Mongoose](https://mongoosejs.com/) | [Vercel](https://vercel.com/) | Git | GitHub 

## The Team behind mealove:

**Stefan Pristl** - [stepris](https://github.com/stepris)

**Gunnar Montag** - [gunnarmon](https://github.com/gunnarmon)

**Stephan Kugler** - [stekug](https://github.com/stekug)

## Workflow & Learnings

Throughout the development of Mealove, we encountered various challenges and learning opportunities:

- **Database-Object Structure:** We spent significant time structuring the recipe object to ensure it met all functional requirements before coding.

- **Forms and Issues:** Implementing forms with validation and user-friendly error handling proved to be a consistent challenge.

- **Component-Based Problem Solving:** Breaking down complex problems into manageable components streamlined our development process.

- **Git Workflow (Rebase):** We improved collaboration efficiency through a structured Git workflow, using techniques like rebasing to keep our commits clean.

- **Typescript:** Leveraging TypeScript helped enhance code quality and reduce runtime errors. We challenged ourselves by incorporating TypeScript into the project, despite it not being part of our bootcamp curriculum. This decision allowed us to deepen our learning and gain valuable experience with a new technology.

- **Project Structure First:** We emphasized planning the project structure, which provided a solid foundation for development.

**Our workflow** involved creating a complete design in Figma and structuring the database object meticulously. We spent around 3–4 days on this preparation before writing any code, ensuring a well-organized and efficient development process.

## Conclusion

Our goal for Mealove was to create a simple, user-friendly app with a modern and appealing design. We focused on usability and made careful decisions about the libraries we included, using only the ones that were essential. Additionally, we built our recipe form completely from scratch without relying on libraries like React Formik or React Hook Form, opting instead for controlled inputs. This approach provided us with valuable learning experiences and a deeper understanding of form handling in React.

## Acknowledgments

We would like to sincerely thank our coaches from [neuefische](https://github.com/neuefische) for their ongoing support, guidance, and detailed code reviews throughout the project. A special thanks to Julian ([j-toscani](https://github.com/j-toscani)) for always providing us with valuable information and tips that helped us improve and grow. Your contributions have been instrumental in making this project a success!

## Running this App

- Clone the repository.
- Install the necessary dependencies.
- Set up your own instances of MongoDB, Cloudinary, Google OAuth, and Next.js.
- Provide the required keys, IDs, and secrets in the .env file
