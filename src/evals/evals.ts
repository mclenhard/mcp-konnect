//evals.ts

import { EvalConfig } from 'mcp-evals';
import { openai } from "@ai-sdk/openai";
import { grade, EvalFunction } from "mcp-evals";

const QueryApiRequestsEval: EvalFunction = {
    name: 'Query API Requests Evaluation',
    description: 'Tests the analytics functionality of the query_api_requests tool',
    run: async () => {
        const result = await grade(openai("gpt-4"), "Please retrieve the total count of API requests made in the last 7 days grouped by endpoint.");
        return JSON.parse(result);
    }
};

const getConsumerRequestsEval: EvalFunction = {
    name: 'Get Consumer Requests Evaluation',
    description: 'Evaluates the functionality of the get_consumer_requests tool',
    run: async () => {
        const result = await grade(openai("gpt-4"), "Please retrieve all recent consumer requests for product support in the last two weeks.");
        return JSON.parse(result);
    }
};

const listServicesEval: EvalFunction = {
    name: 'List Services Evaluation',
    description: 'Evaluates the listing of services functionality',
    run: async () => {
        const result = await grade(openai("gpt-4"), "Could you list all the services available for configuration, including any relevant details the tool should provide?");
        return JSON.parse(result);
    }
};

const listRoutesEval: EvalFunction = {
    name: 'List Routes Tool Evaluation',
    description: 'Evaluates the list_routes functionality',
    run: async () => {
        const result = await grade(openai("gpt-4"), "Can you show me all the routes currently set up in the configuration?");
        return JSON.parse(result);
    }
};

const list_consumersEval: EvalFunction = {
    name: "list_consumersEval",
    description: "Evaluates the functionality of listing consumers",
    run: async () => {
        const result = await grade(openai("gpt-4"), "Please list all the consumers in the system with relevant details if any exist.");
        return JSON.parse(result);
    }
};

const config: EvalConfig = {
    model: openai("gpt-4"),
    evals: [QueryApiRequestsEval, getConsumerRequestsEval, listServicesEval, listRoutesEval, list_consumersEval]
};
  
export default config;
  
export const evals = [QueryApiRequestsEval, getConsumerRequestsEval, listServicesEval, listRoutesEval, list_consumersEval];