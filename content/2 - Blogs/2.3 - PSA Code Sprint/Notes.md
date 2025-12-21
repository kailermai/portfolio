---
title: Notes
draft: true
tags:
  - notes
---
- Use LangChain, Python and Ollama to embed the database into a vector store (RAG)
- Initially used Ollama to embed the json data provided into a vector store and used the OpenAI API provided to generate the report, but PSA provided an embedding model halfway through the hackthon
	- Switched to using Azure OpenAI to embed and generate, so the whole RAG process is done through LangChain's AzureOpenAI support
- Pandas to read json and csv files
- Thought process: Need to generate data based on a specific context, so RAG is relevant (also because OpenAI API provided could only do embeddings and generating messages)
- RAG: Take data provided and embed it into a vector store (data converted into vectors and the AI will use it to query the k most similar data to be used in the prompt to generate)
- Cleaned the data provided and converted into JSON files, used pandas to open the json files and embedded the data based on metadata and content headers (query index)

- Used FastAPI to handle post requests from the frontend to the LLM model
- Containerised the FastAPI application by building the docker image and hosting it on heroku
- Tried using heroku, but the slug size was too big for the free tier, so shifted to digitalocean
- Faced CORS policy: no access control allow origin header => fixed by adding cors middleware into fastapi app

Tutorial to push to dockerhub: https://docs.docker.com/get-started/introduction/build-and-push-first-image/
Generating access token for digitalocean to access private docker repo: https://docs.docker.com/security/access-tokens/
digital ocean tutorials: https://www.youtube.com/watch?v=YAeOzVTN4EQ and https://www.youtube.com/watch?v=O26n5XdeOwE
fastapi tutorial: https://www.youtube.com/watch?v=iWS9ogMPOI0
langchain tutorial: https://www.youtube.com/watch?v=E4l91XKQSgw

- Day of submission AWS went down, so many providers like vercel, netlify, digitalocean and canva went down
- lost some progress on our powerpoint slides as a result, and no time extension was given
- Managed to finish our slides and product video on time and submitted