# Text-Gen

A Generative Text App using Google PaLM API

## Generate an API Key

- Click [here](https://makersuite.google.com/app/apikey) to create a Google Cloud API key.
- Paste your API key in the place of `YOUR_API_KEY` in [Usage](#usage) section.

## Usage

1. Install all the required packages

```bash
npm install
```

2. Create `.env` file in the root directory and add your `API_KEY`
```bash
echo "API_KEY={YOUR_API_KEY}" >> .env
```

3. Start the backend
```bash
npm run start:backend
```

4. Start the frontend on a separate terminal
```bash
npm run start:frontend
```


5. Use the app
