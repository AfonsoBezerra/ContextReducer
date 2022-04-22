import styled from 'styled-components';
import { CartAdd } from '@styled-icons/boxicons-solid/CartAdd';
import { PaneClose } from '@styled-icons/fluentui-system-filled/PaneClose';
import { ClearAll } from '@styled-icons/material-rounded/ClearAll';
import { DeleteArrowBack } from '@styled-icons/fluentui-system-regular/DeleteArrowBack';

export const AddIcon = styled(CartAdd)`
  width: 40px;
  color: black;
`;

export const WindowCloseIcon = styled(PaneClose)`
  width: 30px;
  color: black;
`;

export const ClearAllIcon = styled(ClearAll)`
  width: 30px;
  margin: 0 0.3rem 0 0;
  color: black;
`;

export const DeteleIcon = styled(DeleteArrowBack)`
  width: 30px;
  color: black;
`;
