# Chat-Test

A very basic Electron app designed for testing history or learning purposes.

## Requirements

You will need your own Mistral AI key for the AI functionality. Currently, other model providers are unavailable.

## Configuration

You can have all normal parameters aside from stream and safe-prompt, These are overidden server-side.
Configuration settings can be found in the `ciDialogExchange.mjs` file. Below is an example configuration:

```javascript
{
  // Add your custom configuration here.

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
    // safe_prompt: are both overridden server-side.
  }
}
```

## Important Notice

Any data stored should be considered volatile as it is a publicly shared resource.

