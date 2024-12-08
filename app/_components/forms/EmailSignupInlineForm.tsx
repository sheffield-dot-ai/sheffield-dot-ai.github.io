'use client'
import React, { useState } from "react";
import classes from "./EmailSignupInlineForm.module.css";

const EmailSignupInlineForm: React.FC<{ className?: string }> = props => {
    const [value, setValue] = useState('');

    return <form className={[classes.container, props.className ?? ''].join(' ')}
        method="POST" action="https://faadfb3d.sibforms.com/serve/MUIFACPkaMsocy-t11dU8lW1AFdPkAcfKlkQbVce8RfesJn0fCIgiedNAIyZbC0z7qnbFkkhmG4RSuZzytEuIBUWdn1FVMNdy-KeualtxsTdE5_T1Lfa-s4K14PLbOzGJzYKLpgMuLPNffur4o-p6NnUgVltQQsB9GiPYnjGWxCFZNd-Nhp4ygtnfYGRxt_p3yVfoEVfsL5ObOH1"
    >
        <input type="email"
            id="EMAIL"
            name="EMAIL"
            value={value}
            placeholder="Enter email address"
            className={classes.input}
            onChange={e => setValue(e.currentTarget.value)} />
        <input type="text" name="email_address_check" className={classes.inputHidden} />
        <input type="hidden" name="locale" value="en" />
        <input type="hidden" value="1" id="OPT_IN" name="OPT_IN" readOnly={true} />
        <input type="hidden" name="html_type" value="simple" />
        <button type="submit" className={classes.button}>Sign Up</button>
    </form>
}

export default EmailSignupInlineForm;