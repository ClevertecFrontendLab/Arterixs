import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { rootState } from '../../types/types';

export const useTypedSelector: TypedUseSelectorHook<rootState> = useSelector;
