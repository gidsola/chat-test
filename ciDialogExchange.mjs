async function ciDialogExchange(userQuery) {
  try {
    const
      url = 'https://onsocket.com/api/ai/chat/completions',
      headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'onsocketauth': "public-access"
      },
      body = JSON.stringify({
        // add whatever configuration you would like here.

        // ** MUST BE MISTRAL MODEL **
        model: 'pixtral-12b-2409',

        // ** MUST BE MISTRAL MODEL **
        modelApiKey: "api_key_here",
        
        completionOptions: {
          /**
           * The top-p value for sampling. Controls the diversity of the generated output.
           */
          top_p: 0.8,
          /**
           * The maximum number of tokens to generate.
           */
          max_tokens: 4096,
          /**
           * The random seed to use for generating the output.
           */
          random_seed: 1337
          // stream: and 
          // safe_prompt: are both overidden server-side.
        }
      }),
      response = await fetch(url, {
        method: 'POST',
        headers: headers,
        body: { ...body, params: userQuery }
      });

    return response.ok
      ? await response.text()
      : new Error(`HTTP error! status: ${response.status}`);

  } catch (error) { console.error('Error sending message:', error); }
};
export { ciDialogExchange };
