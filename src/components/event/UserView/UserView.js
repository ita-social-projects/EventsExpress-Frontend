import React, { useEffect, useState } from 'react';
import { userViewAttitude } from '../../helpers/userViewUtils';
import CustomAvatar from '../../avatar/custom-avatar';
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';
import './UserView.css';
import { getAge } from '../../helpers/get-age-string';
import { USER_VIEW_LABELS } from '../../../constants/userViewConstants';

const { AGE, YOU, THIS_USER } = USER_VIEW_LABELS;

const UsersView = ({ user, children }) => {
  const { attitude } = user;
  const [attitudeArr, setAttitudeArr] = useState([]);

  useEffect(() => {
    return setAttitudeArr(userViewAttitude(attitude));
  }, [attitude]);

  return (
    <div>
      <div className={'border-bottom ' + attitudeArr[2]}>
        <div className="d-flex align-items-center w-100">
          <div className="flex-grow-1">
            <Link to={'/user/' + user.id} className="btn-custom">
              <div className="d-flex align-items-center">
                <CustomAvatar
                  size="little"
                  userId={user.id}
                  name={user.username}
                />
                <div>
                  <h5>{user.username}</h5>
                  {`${AGE}: ` + getAge(user.birthday)}
                </div>
                {attitudeArr[0] && (
                  <Tooltip
                    title={`${YOU} ${attitudeArr[0]} ${THIS_USER}`}
                    placement="bottom"
                    TransitionComponent={Zoom}
                  >
                    <div className="retraet">
                      <i
                        className={`far fa-thumbs-${attitudeArr[1]} cancel-text`}
                      />
                    </div>
                  </Tooltip>
                )}
              </div>
            </Link>
          </div>
        </div>
        <div className="d-flex justify-content-around">{children}</div>
      </div>
    </div>
  );
};

export default UsersView;
