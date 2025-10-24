# Respostas Teóricas — Lista 01

**Questão 1a.**  
*O que caracteriza uma linguagem de tipagem estática? Como a verificação de tipos ocorre?*  
Linguagens de tipagem estática exigem que os tipos das variáveis sejam conhecidos e verificados em tempo de compilação. A verificação de tipos é feita pelo compilador (ou verificador de tipo) antes da execução; erros de tipo são detectados e reportados cedo.

**Questão 1b.**  
*Benefícios da tipagem estática (performance e segurança).*  
- **Performance:** compiladores podem otimizar código com base em tipos conhecidos (melhor alocação, chamadas diretas).  
- **Segurança:** detecção precoce de equivalência de tipos e usos incorretos, reduz bugs em tempo de execução.

**Questão 1c.**  
*Tipagem dinâmica e desafios de performance.*  
Em tipagem dinâmica, os tipos são verificados em tempo de execução; variáveis podem receber valores de tipos diferentes. Desafios: overhead para checagens em tempo de execução e dificuldades para otimizações agressivas.

**Questão 1d.**  
*Tipagem forte vs fraca.*  
- **Forte:** conversões entre tipos não acontecem implicitamente sem perda segura (ex.: Python).  
- **Fraca:** conversões implícitas mais permissivas (ex.: coerção automática em JS em alguns casos).

**Questão 1e.**  
*Linguagens híbridas e inferência de tipos.*  
Linguagens híbridas permitem ambas abordagens (ex.: TypeScript adiciona tipagem estática a JS). **Inferência de tipos** permite que o compilador deduza tipos sem anotações explícitas, combinando conforto da tipagem dinâmica com segurança da estática.

**Questão 1f.**  
*Como JavaScript lida com tipagem de dados.*  
JavaScript é uma linguagem de tipagem dinâmica e fraca: tipos são associados a valores em tempo de execução; há coerções automáticas em algumas operações (por isso devemos ter cuidado). Para adicionar checagem estática ao JS pode-se usar TypeScript.

