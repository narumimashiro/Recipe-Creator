from manage_database import ManageDatabase
# from talk_with_chatGPT import TalkWithchatGPT
import time

def lambda_handler(event, context):

    # パラメータの取得
    section = event['queryStringParameters']['param1']

    # 検索履歴を取得
    if(section == 'get_history'):
        # インスタンス生成
        manage_data = ManageDatabase()
        
        # DynamoDBからテーブルデータ取得
        data = manage_data.getQueryData()
    
        res_data = manage_data.convertToJson(data)
    
        return res_data
    
    elif(section == 'set_history'):
        recipe = event['queryStringParameters']['param2']

        # インスタンス生成
        manage_data = ManageDatabase()
        
        # UNIX タイムを取得
        unix_time = int(time.time())
        
        # 一番古いデータを削除
        manage_data.deleteQueryData()
        
        # DynamoDBのテーブルを更新
        manage_data.setQueryData(unix_time, recipe)
        
        return {'message': 'set database success'}