import s from './card.module.css'

export const Card = () => {
    return (
        <div className={s.wrapper}>
            <img src={'https://nbalance.by/wp-content/uploads/2022/03/ml574evb-1-300x248.jpg'} alt={'sneaker'}/>
            <h2>New Balance <br/>
                574
            </h2>
            <span className={s.price}>615.00 BYN</span>
            <div className={s.buttonWrapper}>
                <span>1</span>
                <button>Add</button>
            </div>

        </div>
    );
};
