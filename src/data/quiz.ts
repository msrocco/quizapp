export const QUIZ = [
  {
    id: "1",
    title: "Using States",
    level: 1,
    questions: [
      {
        title:
          "Hooks are a way to work with functions in React instead of classes. useState and useEffect are examples of well-used hooks. However, it is still not possible to create our own hooks.",
        alternatives: ["True", "False"],
        correct: 0,
      },
      {
        title:
          "Immutability in React is very important because if we directly mutate the value of a state instead of replacing it with a new value, the component does not re-render correctly.",
        alternatives: ["True", "False"],
        correct: 0,
      },
      {
        title: "Regarding rendering in React, mark the incorrect alternative:",
        alternatives: [
          "There are two common cases in which a React component is rendered: the initial rendering of the component and state updates.",
          "Re-renders typically do not recreate all components like the initial rendering.",
          "An update of a state in a parent component can trigger the re-rendering of a child (nested) component.",
          "React does not follow a defined flow when rendering a screen, and the steps of the process can vary significantly.",
        ],
        correct: 0,
      },
    ],
  },
  {
    id: "2",
    title: "Using TypeScript",
    level: 2,
    questions: [
      {
        title:
          "What type of assignment is this variable, `const fullName: string = 'Dylan Israel';`?",
        alternatives: ["Explicit", "Implicit"],
        correct: 0,
      },
      {
        title: "What is the type of `const example = ['Dylan']`?",
        alternatives: ["unknown[]", "string", "string[]", "any[]"],
        correct: 2,
      },
      {
        title:
          "keyof can be used with index signatures to extract the index type.",
        alternatives: ["True", "False"],
        correct: 0,
      },
    ],
  },
  {
    id: "3",
    title: "React Navigation",
    level: 2,
    questions: [
      {
        title: "What is the best description to identify the Stack Navigator?",
        alternatives: [
          "Adds a fixed menu at the bottom of the device, making it easier to access frequently used screens.",
          "When opening a new screen, this new screen is placed on top of the navigation stack, and when going back, the screens are removed from this stack.",
          "Adds a side menu that occupies the entire height of the device. Initially, this menu is hidden, and you can open it by dragging the screen.",
        ],
        correct: 1,
      },
      {
        title:
          'When "typing" routes, you have the advantage of knowing whether a route receives parameters or not and what the parameter format is during navigation.',
        alternatives: ["True", "False"],
        correct: 0,
      },
      {
        title: "Regarding the NavigationContainer, which statement is correct?",
        alternatives: [
          'The NavigationContainer is the component in which we create a route in the application, passing it the "name" and "component" properties.',
          'The NavigationContainer is a "hook" exported from within react navigation that allows us to access functions like "navigate" and "goBack".',
          "The NavigationContainer is a context that shares all routes and navigation properties with our application.",
        ],
        correct: 2,
      },
    ],
  },
  {
    id: "4",
    title: "Styled Components",
    level: 3,
    questions: [
      {
        title:
          "CSS-in-JS is the styling strategy in which JavaScript is used to style components.",
        alternatives: ["True", "False"],
        correct: 0,
      },
      {
        title:
          "Select the option below that does not correspond to a feature of Styled Components.",
        alternatives: [
          "Importing the styled default and using it to create components (e.g., styled.View).",
          'It is possible to either create predefined styled components with "styled." or pass custom components to it using styled().',
          "The way of styling components closely resembles what we use when working directly with CSS (lowercase letters, separated by hyphens, and semicolons at the end).",
          "It is only possible to customize component stylings (style prop) via styled, meaning it is not possible to configure other component properties/attributes.",
        ],
        correct: 1,
      },
      {
        title:
          "With Styled Components, it is possible to isolate the component structure from its styling.",
        alternatives: ["True", "False"],
        correct: 0,
      },
    ],
  },
  {
    id: "5",
    title: "Local Storage",
    level: 2,
    questions: [
      {
        title:
          "Which of the following methods saves information in AsyncStorage?",
        alternatives: [
          "AsyncStorage.removeItem",
          "AsyncStorage.setItem",
          "AsyncStorage.getItem",
        ],
        correct: 1,
      },
      {
        title: "What best describes Prop Drilling?",
        alternatives: [
          "A strategy where you pass properties between components until you reach the desired component.",
          "A strategy where you save information locally on the device (storage) and access it when needed.",
          "A strategy where you share information between components through contexts (Context API).",
        ],
        correct: 1,
      },
      {
        title: "What is the correct way to save objects in AsyncStorage?",
        alternatives: [
          "await AsyncStorage.setItem('@app:key', { id: 1, name: 'Item 1' });",
          "await AsyncStorage.getItem('@app:key', JSON.stringify({ id: 1, name: 'Item 1' }));",
          "await AsyncStorage.setItem('@app:key', JSON.stringify({ id: 1, name: 'Item 1' }));",
        ],
        correct: 2,
      },
    ],
  },
  {
    id: "6",
    title: "React Native",
    level: 1,
    questions: [
      {
        title: "Select the correct statement about React Native:",
        alternatives: [
          "React Native is a JavaScript framework based on React capable of creating applications for both Android and iOS.",
          "Unlike React, React Native is entirely community-driven and has no relationship with Facebook.",
          "With React Native, you can keep almost your entire application in JavaScript and manipulate native code if necessary.",
          "Despite the prominence of ReactJS on the web, React Native is not widely used in the current job market in the mobile development field.",
        ],
        correct: 2,
      },
      {
        title:
          "Select the incorrect statement about React Native CLI and Expo:",
        alternatives: [
          "Both React Native CLI and Expo can be used to create applications for iOS and Android.",
          'React Native CLI is the more "raw" way to create a React Native project. Expo adds more functionality on top of this base, such as Expo Go.',
          "With Expo, you can test iOS applications using Expo Go even if you do not have a physical iOS device and macOS, which is not possible with React Native CLI.",
          "The official React Native documentation recommends only React Native CLI and does not mention Expo.",
        ],
        correct: 3,
      },
      {
        title: "About Expo, select the correct statement:",
        alternatives: [
          "Expo has two traditional paths when creating a project: Managed Workflow and Bare Workflow.",
          "Managed Workflow is the way to create projects where you have access to your native code from the beginning.",
          "With Bare Workflow, you cannot use Expo Go at any point.",
          "Configuring the React Native environment for Managed Workflow is more complex than for Bare Workflow.",
        ],
        correct: 3,
      },
      {
        title:
          "About componentization in React Native, choose the incorrect statement:",
        alternatives: [
          "Componentization is a way to reuse code snippets in various parts of your code.",
          "One of the advantages of componentization is simplifying a very complex component into multiple smaller components, making code maintenance easier.",
          "Despite helping with code reuse and simplification, componentization reduces project productivity and readability.",
          "None of the above is correct.",
        ],
        correct: 3,
      },
    ],
  },
];
