export interface SQLDatabaseClient {
  executeQuery(query: string, params?: any[]): Promise<{ rows: any[] }>
  executeTransaction(callback: (client: any) => Promise<any>): Promise<any>
}
