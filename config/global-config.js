import dotenv from 'dotenv'; 
const result = dotenv.config()

if (result.error) {
  throw result.error
}

const config =  result.parsed

export default config; 