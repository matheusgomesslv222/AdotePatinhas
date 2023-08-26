import styles from "./ButtonsCategories.module.css"
export default function ButtonsCategories() {
  return (
    <>
        <div className={styles.ButtonsCategories}>
            <div>
                <button >
                    <img src="/img/dog.png" alt="" />
                </button>
            </div>
            <div>   
                <button >
                    <img src="/img/cat.png" alt="" />
                </button>
            </div>
            <div>
                <button >
                    <img src="/img/rabbit.png" alt="" />
                </button>
            </div>
            <div>
                <button >
                    <img src="/img/turtle1.png" alt="" />
                </button>
            </div>
            <div>
                <button >
                    <img src="/img/bird.png" alt="" />
                </button>
            </div>
        </div>
    </>
  )
}
