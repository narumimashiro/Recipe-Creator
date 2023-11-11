# 検索履歴を取得および保存

import datetime
import os
import boto3
from boto3.dynamodb.conditions import Key

class ManageDatabase:
# data
    table_name = os.environ['TABLE_NAME']
    partition_key = os.environ['PARTITION_KEY']
    new_index = 3
    del_index = 1

# method
    def __init__(self):
        pass
      
    def __del__(self):
        pass

    @staticmethod
    def convertUnixTime(unix):
        # unixタイムを現在時間に変換
        date = datetime.datetime.utcfromtimestamp(unix)
        
        # ローカルタイムゾーンに変換
        local_date = date.astimezone()
        
        # 日時を文字列にフォーマット
        formatted_time = local_date.strftime('%Y-%m-%d %H:%M:%S')
        
        return formatted_time
    
    @classmethod
    def getQueryData(cls):
        dynamodb = boto3.resource('dynamodb')
        table = dynamodb.Table(os.environ['TABLE_NAME'])
        
        # データ取得
        response = table.query(
            KeyConditionExpression=Key(os.environ['PARTITION_KEY']).eq(os.environ['PARTITION_KEY_VALUE'])
        )
        
        # dynamobdの返答
        return response['Items']

    @classmethod
    def convertToJson(cls, data):
        # DynamoDBのデータから必要な部分をピックアップしてJson形式にしていく
        res_data = []
        for item in data:
            index = item['item_index']
            create_date = cls.convertUnixTime(int(item['create_date']))
            context = item['context']
            res_data.append({
                'item_index': index,
                'create_date': create_date,
                'context': context
            })

        return res_data

    @classmethod
    def setQueryData(cls, unix, content):
        dynamodb = boto3.resource('dynamodb')
        table = dynamodb.Table(os.environ['TABLE_NAME'])

        for i in range(2):
            response = table.get_item(
                Key={
                    'recipe_search_history': os.environ['PARTITION_KEY_VALUE'],
                    'item_index': i + 2
                }
            )
            
            # indexを変更のち、新規で作成
            if 'Item' in response:
                item = response['Item']
                item['item_index'] = i + 1
                table.put_item(Item=item)
                
                # 古い項目の削除
                table.delete_item(
                    Key={
                        'recipe_search_history': os.environ['PARTITION_KEY_VALUE'],
                        'item_index': i + 2
                    }
                )

        table.put_item(
            Item={
                'recipe_search_history': os.environ['PARTITION_KEY_VALUE'],
                'item_index': cls.new_index,
                'create_date': unix,
                'context': content,
            }
        )

    @classmethod
    def deleteQueryData(cls):
        dynamodb = boto3.resource('dynamodb')
        table = dynamodb.Table(os.environ['TABLE_NAME'])
        table.delete_item(
            Key={
                'recipe_search_history': os.environ['PARTITION_KEY_VALUE'],
                'item_index': cls.del_index
            }
        )
