import React from "react";
import {
	BsGithub,
	BsFacebook,
	BsTwitter,
	BsInstagram,
	BsYoutube,
} from "react-icons/bs";
import * as Styled from "./Footer.styles";
import { Link } from "react-router-dom";

const FooterSocialMedia = () => {
	return (
		<div>
			<Styled.SocialMedia>
				<p>______________________</p>
				<ul>
					<Styled.NavElement>
						<Styled.SocialMediaIcon
							to="https://github.com/Rudolinka/MovieVerse"
							target="_blank"
						>
							<BsGithub />
						</Styled.SocialMediaIcon>
						<Styled.SocialMediaIcon to="#">
							<BsFacebook />
						</Styled.SocialMediaIcon>
						<Styled.SocialMediaIcon to="#">
							<BsTwitter />
						</Styled.SocialMediaIcon>
						<Styled.SocialMediaIcon to="#">
							<BsInstagram />
						</Styled.SocialMediaIcon>
						<Styled.SocialMediaIcon to="#">
							<BsYoutube />
						</Styled.SocialMediaIcon>
					</Styled.NavElement>
				</ul>
				<p>______________________</p>
			</Styled.SocialMedia>
		</div>
	);
};

export default FooterSocialMedia;
