import {Button} from 'components/Button';
import {useForm} from "react-hook-form";
import classes from './Form.module.scss';

const Form = () => {
    const {
        register,
        formState: {errors},
        handleSubmit,
        reset,

    } = useForm({mode: 'onSubmit'})

    const onSubmit = (data) => {
    }
    return (
        <section className={classes.section}>
            <div className="container">
                <form
                    className={classes.form}
                    autoComplete='off'
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <input
                        type="url"
                        placeholder="Shorten a link here..."
                        className={classes.input}
                    />
                    <Button
                        variant="square"
                        type="submit"
                        size="medium"
                    >Shorten it!</Button>
                </form>
            </div>
        </section>
    )
}

export {Form};
