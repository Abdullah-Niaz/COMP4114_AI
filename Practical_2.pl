male(abdullah).
male(yasir).
male(waqar).
male(niaz).
male(sajid).

female(m_female).
female(s_1_female_m).
female(s_2_female).
female(hadia).
female(urwa).
female(irsa).

parent(abdullah,niaz).
parent(yasir,niaz).
parent(waqar,niaz).
parent(s_1_female_m, niaz).
parent(s_2_female,niaz).
parent(abdullah,m_female).
parent(yasir,m_female).
parent(waqar,m_female).
parent(s_1_female_m,m_female).
parent(s_2_female,m_female).

parent(hadia, sajid).
parent(urwa, sajid).
parent(irsa, sajid).
parent(hadia, s_1_female_m).
parent(urwa, s_1_female_m).
parent(irsa, s_1_female_m).





mother(X,Y):-parent(X,Y),female(X).
father(X,Y):-parent(X,Y),male(X).
sister(X,Y):-parent(Z,X),parent(Z,Y),female(X),X\==Y.
brother(X,Y):-parent(Z,X),parent(Z,Y),male(X),X\==Y.
grandfather(X,Z):-father(X,Y),parent(Y,Z).
grandmother(X,Z):-mother(X,Y),parent(Y,Z).
siblings(X,Y):-(brother(X,Y);sister(X,Y)),X\==Y.
