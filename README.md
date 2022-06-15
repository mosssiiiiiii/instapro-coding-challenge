# Instapro Codding Challenge

The project has been created based on Create-react-app. As has mentioned in the help file , this project is developed by any specific third party module and state management
Actually, I wasn't sure about allowance to use React Context so I didn't use any state management even Context
But if this parameter is important for you I can refactor my state by Context

For initialing your state , there is a constant in constant file is named initial value , so you can change this object and customize but as you probably know , you should follow the object instruction

![alt text](https://gcdnb.pbrd.co/images/yYpUed6a0GpE.png?o=1)

## Stack

- React => CRA
- lodash
- moment
- Jest
- Testing Library
- Eslint
- Prettier
- Docker

I use just a third party module (styled-component) for handling styles

## Run

To run the project, First of all, you need to follow the below steps:

1. You have to have Nodejs installed.

2. Clone the project from repository and open it with your prefered IDE.

3. Run yarn install in te root directory.

## Development

To run on development mode , you just need to run `yarn start`, then open http://localhost:3000 on your browser.

## Production

To run on production mode , please run `yarn build`and then `yarn start`, afterward, open http://localhost:3000 on your browser.

## Test

To run test cases , please run `yarn test` .

## Test coverage

To run test cases with coverage, please run yarn test:coverage .

## Run with docker

To run the project with docker locally, you have to have docker installed and docker daemon started, then follow the below steps:

```bash
1. Run docker build -t your-tag .

2. Run docker run -p 3000:3000 your-tag
```

Finally, you can see your app run on top the docker on http://localhost:3000.

## Conclusion

I've tried to focus on showing the both my technical skills and technological knowledge in this project, It is so clear if I had enough time I would add another feature to complete the project but I mean time I did my best as possible as

Cheers.
