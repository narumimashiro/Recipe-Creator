# 仕様検討

## 技術選定

### フロントエンド

- NextJs
- Recoil
- MaterialUI

### データベース

- Firestore
- DynamoDB

#### chatGPTのAPIレスポンス

```json
{
    "id": "chatcmpl-01aJajaC0YPYSTIPvKjjilqrWU2Ve",
    "object": "chat.completion",
    "created": 1677649420,
    "model": "gpt-3.5-turbo",
    "usage": {
        "prompt_tokens": 56,
        "completion_tokens": 31,
        "total_tokens": 87
    },
    "choices": [
        {
            "message": {
                "role": "assistant",
                "content": "ChatGPT API is a powerful tool for natural language understanding and generation."
            }
        }
    ]
}
```

### バックエンド

- Python
- Ruby
- Go
- PHP