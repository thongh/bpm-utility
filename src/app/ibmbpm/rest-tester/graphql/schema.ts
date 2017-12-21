export interface ApiListInterface{
  apis: Array<{
    id: string| null
    name: string| null
    child: string | null
  }>| null;
}
