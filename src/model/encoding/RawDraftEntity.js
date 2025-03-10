/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+draft_js
 * @flow
 * @format
 */

'use strict';

import type {DraftEntityMutability} from 'DraftEntityMutability';
import type {DraftEntityType} from 'DraftEntityType';

/**
 * A plain object representation of an EntityInstance.
 */
export type RawDraftEntity = {
  type: DraftEntityType,
  mutability: DraftEntityMutability,
  data: ?{[key: string]: any, ...},
  ...
};
