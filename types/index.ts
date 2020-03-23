import {Drizzle} from '@drizzle/store';
import {RouteProp}  from '@react-navigation/native';
import {StackNavigationProp} from "@react-navigation/stack";

export type Task = {
  caption: string;
  description: string;
  number: number;
  owner: string;
  status: number;
};

export type GetListPayload = {
  payload: {
    offset: number;
    limit: number;
  };
  drizzle: Drizzle;
  drizzleState: object;
};

export type RootNavStack = {
  List: undefined;
  Detail: {itemId: number};
};

export type DetailRouteProp = RouteProp<RootNavStack, 'Detail'>;
export type DetailNavProp = StackNavigationProp<RootNavStack, 'List'>;

export type ListNavProp = StackNavigationProp<RootNavStack, 'List'>;
