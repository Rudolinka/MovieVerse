import React from 'react';
import { Link } from 'react-router-dom';
import * as Styled from './Header.styles';
import { BsSearch } from 'react-icons/bs';

const header = () => {
	return (
		<header>
			<Styled.Wrapper>
				<Styled.ComebackHp to='/'>MovieVerse</Styled.ComebackHp>
				<Styled.Search>
					<BsSearch />
				</Styled.Search>
				<Styled.NavElement>
					<ul>
						<Styled.litElement>
							<Styled.NavLink to='/'>HomePage</Styled.NavLink>
						</Styled.litElement>
						<Styled.litElement>
							<Styled.NavLink to='/movie'>Movie</Styled.NavLink>
						</Styled.litElement>
						<Styled.litElement>
							<Styled.NavLink to='/actor'>Actor</Styled.NavLink>
						</Styled.litElement>
						<Styled.litElement>
							<Styled.NavLink to='/faq'>FAQ</Styled.NavLink>
						</Styled.litElement>
						<Styled.litElement>
							<Styled.NavLink to='/rules'>Rules</Styled.NavLink>
						</Styled.litElement>
					</ul>
				</Styled.NavElement>
			</Styled.Wrapper>
		</header>
	);
};

export default header;
