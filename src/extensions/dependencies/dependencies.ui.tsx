import React from 'react';
import { WorkspaceUI } from '../workspace/workspace.ui';

export class DependenciesUI {
  static dependencies = [WorkspaceUI];

  static async provider([workspace]: [WorkspaceUI]) {
    workspace.registerMenuItem({
      label: 'Dependencies',
      onClick: () => workspace.open(<div>Here are dependencies y'all</div>)
    });

    return new DependenciesUI();
  }
}