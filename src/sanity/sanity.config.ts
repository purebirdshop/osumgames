/**
 * Canonical Sanity Studio Configuration for OSUM Games
 * Can be used in standalone Sanity Studio (`sanity dev`) or deployed via Sanity Cloud (`sanity deploy`)
 */
import { schemaTypes } from './schemas';

export const sanityStudioConfig = {
  name: 'osum-games-studio',
  title: 'OSUM Games Studio CMS',
  projectId: (import.meta as any).env?.VITE_SANITY_PROJECT_ID || 'your_project_id',
  dataset: (import.meta as any).env?.VITE_SANITY_DATASET || 'production',
  plugins: [],
  schema: {
    types: schemaTypes,
  },
};

export default sanityStudioConfig;
