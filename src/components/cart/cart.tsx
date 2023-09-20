import s from './cart.module.css'

export const Cart = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.cartItemsWrap}>
                <div className={s.cartItem}>
                    <img src={'https://nbalance.by/wp-content/uploads/2022/03/ml574evb-1-300x248.jpg'} alt={'sneaker'}/>
                    <h2>New Balance <br/>574</h2>
                    <span className={s.price}>615.00 BYN</span>
                    <div className={s.buttonWrapper}>
                        <button>-</button>
                        <span>1</span>
                        <button>+</button>
                    </div>
                </div>
                <div>
                    <form className={s.form}>
                        <input placeholder={'NAME'}/>
                        <input placeholder={'SURNAME'}/>
                        <input placeholder={'ADDRESS'}/>
                        <input placeholder={'PHONE'}/>

                        <button>ORDER</button>
                    </form>
                </div>
            </div>
            <span>Total price: 0.00 BYN</span>
        </div>
    );
};
