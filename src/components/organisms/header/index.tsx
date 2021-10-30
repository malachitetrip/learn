import { memo } from 'react';
import { PageHeader } from 'antd';
import { EditOutlined, CheckCircleOutlined } from '@ant-design/icons';
import sharedSm from 'styles/shared.module.scss';

import sm from './sm.module.scss';
import useHeader from "./useHeader";

const Header = () => {
  const { isEditing, toggleIsEditing, subTitle, title } = useHeader();

  return (
    <PageHeader
      className={sm.Header}
      title={title}
      subTitle={subTitle}
      extra={
        subTitle ? (
          <button className={sm.Header_Button} onClick={toggleIsEditing}>
            {isEditing ? (
              <CheckCircleOutlined className={sharedSm.Icon} />
            ) : (
              <EditOutlined className={sharedSm.Icon} />
            )}
          </button>
        )
        : undefined
      }
    />
  );
};

export default memo(Header);
