import axios from 'axios';
import { AddNodeData, NodeData } from '../models/node.interfaces';

const baseUrl = 'http://localhost:4000/nodes';

export const addNode = async (data: AddNodeData): Promise<NodeData> => {
  const response = await axios.post<NodeData>(baseUrl, data);
  return response.data;
};

export const getChildNodes = async (parentId: string): Promise<NodeData[]> => {
  const response = await axios.get<NodeData[]>(
    `${baseUrl}/${parentId}/children`
  );
  return response.data;
};
