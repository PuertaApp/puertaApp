import styled from "styled-components";
import Link from 'next/link';
import { StyledSignInCard } from './SignInCard'

const submitForm = event => {
	event.preventDefault();
};

const SignUpCard = (props) => {
	return (
		<StyledSignInCard>
			<div className="container">
				<form>
					<ul>
						<li>
							<label htmlFor="name">Full Name:</label>
							<input
								type="text"
								id="name"
								placeholder="Please enter your full name..."
							/>
						</li>
						<li>
							<label htmlFor="phone-number">Phone Number:</label>
							<input
								type="text"
								id="phone-number"
								placeholder="Please enter your phone number..."
							/>
						</li>
					</ul>
					<div className="btn-container">					
            <Link href="/signin">
              <a className="btn small-btn">Signin</a>
            </Link>
					</div>
				</form>
			</div>
		</StyledSignInCard>
	);
};

export default SignUpCard;
