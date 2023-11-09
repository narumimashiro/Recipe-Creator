from search_history import SearchHistory
# from talk_with_chatGPT import TalkWithchatGPT

def lambda_handler(event, context):

    # パラメータの取得
    section = event['queryStringParameters']["param1"]
    
    # 検索履歴を取得
    if(section == 'get_history'):
        # インスタンス生成
        search_history = SearchHistory()
        
        # DynamoDBからテーブルデータ取得
        data = search_history.getQueryData()
    
        res_data = search_history.convertToJson(data)
    
        return res_data
