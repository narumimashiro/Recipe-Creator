# ## chatGPTとのやり取りクラス

# import os
# # import requests
# # import json
# from openai import OpenAI

# class TalkWithchatGPT:
# # data
#     api_key = os.environ['API_KEY']
#     # endpoint = 'https://api.openai.com/v1/chat/completions'
#     # headers = {
#     #     'Content-Type': 'application/json',
#     #     'Authorization': f'Bearer {api_key}'
#     # }
#     max_tokens = 50

# # method
#     def __init__(self):
#         pass
      
#     def __del__(self):
#         pass

#     @classmethod
#     def getResponse(cls, prompt):
#         # data = {
#         #     'prompt': f'{prompt}',
#         #     'max_tokens': cls.max_tokens
#         # }
        
#         # # # リクエスト送信
#         # response = requests.post(cls.endpoint, headers=cls.headers, data=json.dumps(data))
        
#         # # 返答処理
#         # if requests.status_codes == 200:
#         #     res = response.json()
#         #     return res['choices'][0]['message']['content']
#         # else:
#         #     res = {}
        
#         client = OpenAI()
#         openai.api_key = cls.api_key
#         res = client.ChatCompletion.create(
#             engine="text-davinci-003",  # エンジンのバージョンを指定
#             prompt=prompt,
#             max_tokens=cls.max_tokens
#         )
        
#         # return res["choices"][0]["message"]["content"]
