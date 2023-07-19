import styles from './TodoHeader.module.scss'
import { Button } from '../Common/Button';
import { HiOutlineSwitchVertical } from 'react-icons/hi'
import { getFormattedDate } from '../../utils/DateUtils';


export function TodoHeader() {

    return (
        <div className={styles.header}>
            <div className={styles.header__status__bar}>
                <h1>Today</h1>
                <p>{getFormattedDate(Date.now())}</p>
            </div>
            <div className={styles.header__control__bar}>
                <Button text='status' active={true}></Button>
                <Button text='date' active={false}></Button>
                <Button text='task' active={false}></Button>
                <span className={styles.control__bar__icon}>
                    <HiOutlineSwitchVertical />
                </span>
            </div>
        </div>
    )
}
