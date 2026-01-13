import { useContext } from 'react';
import { SettingContext, SettingContextAction } from './SettingContext';

export function useSetting() {
  const context = useContext(SettingContext);
  if (!context) {
    throw new Error('useSetting must be used within a SettingProvider');
  }
  return context;
}

export function useSettingAction() {
  const context = useContext(SettingContextAction);
  if (!context) {
    throw new Error('useSettingAction must be used within a SettingProvider');
  }
  return context;
}
