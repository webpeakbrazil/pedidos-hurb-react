import { useEffect, useState } from 'react';
import './../../global.css';

const ModalCliente = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    facebook: '',
    twitter: '',
    phone: '',
    mobile: '',
    cf_nome_completo: '',
    cf_instagram: '',
    cf_data_de_nascimento: '',
    cf_cnpj_do_cliente: '',
    cf_pessoa_fisicia_ou_juridica: '',
    cf_cpf_do_cliente: '',
    cf_fraude_confirmada: '',
    cf_e_mail_antigo: '',
    cf_bairro: '',
    cf_numero_da_residencia: '',
    cf_complemento: '',
    cf_nome_do_favorecido_da_conta: '',
    cf_banco_do_cliente: '',
    cf_tipo_de_conta: '',
    cf_agencia_do_cliente: '',
    cf_digito_da_conta_do_cliente: '',
    cf_numero_da_conta_do_cliente_sem_digito: ''
  });

  const handleChange = (event: any) => {
    const { id, value } = event.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();

    // Criar um novo contato
    let requestObj = {
      url: 'https://desk.zoho.com/api/v1/contacts/',
      headers: {
        'Content-type': 'application/json'
      },
      type: 'PATCH',
      postBody: formData,
      connectionLinkName: 'zohodesk',
      data: {}
    };
    ZOHODESK.request(requestObj)
      .then(function (data: any) {
        console.log('Dados do contato criado:', data);
        alert('Contato criado com sucesso!');
        // Limpar o formulário após a criação (opcional)
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          facebook: '',
          twitter: '',
          phone: '',
          mobile: '',
          cf_nome_completo: '',
          cf_instagram: '',
          cf_data_de_nascimento: '',
          cf_cnpj_do_cliente: '',
          cf_pessoa_fisicia_ou_juridica: '',
          cf_cpf_do_cliente: '',
          cf_fraude_confirmada: '',
          cf_e_mail_antigo: '',
          cf_bairro: '',
          cf_numero_da_residencia: '',
          cf_complemento: '',
          cf_nome_do_favorecido_da_conta: '',
          cf_banco_do_cliente: '',
          cf_tipo_de_conta: '',
          cf_agencia_do_cliente: '',
          cf_digito_da_conta_do_cliente: '',
          cf_numero_da_conta_do_cliente_sem_digito: ''
        });
      })
      .catch((error: any) => {
        console.error('Erro ao criar contato:', error);
        alert('Erro ao criar contato. Verifique o console para mais detalhes.');
      });
  };

  const resizeModal = async () => {
    try {
      ZOHODESK.invoke('RESIZE', { width: '80%', height: '80%' });
    } catch (error) {
      console.error('Erro ao redimensionar o modal:', error);
    }
  };

  useEffect(() => {
    resizeModal();
  }, []);

  return (
    <div>
      <h2>Atualize os dados do contato</h2>
      <form onSubmit={handleSubmit} id="contactForm" className="card">
        <div>
          <input
            placeholder="Nome"
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          <br />
        </div>

        <div>
          <input
            placeholder="Sobrenome"
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
          <br />
        </div>

        <div>
          <input
            placeholder="Email"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <br />
        </div>

        <div>
          <input
            placeholder="Nome completo"
            type="text"
            id="cf_nome_completo"
            name="cf_nome_completo"
            value={formData.cf_nome_completo}
            onChange={handleChange}
          />
          <br />
        </div>

        <div>
          <input
            placeholder="Facebook"
            type="text"
            id="facebook"
            name="facebook"
            value={formData.facebook}
            onChange={handleChange}
          />
          <br />
        </div>

        <div>
          <input
            placeholder="Twitter"
            type="text"
            id="twitter"
            name="twitter"
            value={formData.twitter}
            onChange={handleChange}
          />
          <br />
        </div>

        <div className="span2">
          <input
            placeholder="Instagram"
            type="text"
            id="cf_instagram"
            name="cf_instagram"
            value={formData.cf_instagram}
            onChange={handleChange}
          />
          <br />
        </div>

        <div>
          <input
            placeholder="Telefone"
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          <br />
        </div>

        <div>
          <input
            placeholder="Celular"
            type="tel"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
          />
          <br />
        </div>

        <div className="span2">
          <input
            placeholder="Data de nascimento"
            type="text"
            onFocus={(e) => (e.target.type = 'date')}
            onBlur={(e) => (e.target.type = 'text')}
            id="cf_data_de_nascimento"
            name="cf_data_de_nascimento"
            value={formData.cf_data_de_nascimento}
            onChange={handleChange}
          />
          <br />
        </div>

        <div>
          <input
            placeholder="CNPJ"
            type="text"
            id="cf_cnpj_do_cliente"
            name="cf_cnpj_do_cliente"
            value={formData.cf_cnpj_do_cliente}
            onChange={handleChange}
          />
          <br />
        </div>

        <div>
          <input
            placeholder="CPF"
            type="text"
            id="cf_cpf_do_cliente"
            name="cf_cpf_do_cliente"
            value={formData.cf_cpf_do_cliente}
            onChange={handleChange}
          />
          <br />
        </div>

        <div>
          <select
            name="cf_pessoa_fisicia_ou_juridica"
            id="cf_pessoa_fisicia_ou_juridica"
            value={formData.cf_pessoa_fisicia_ou_juridica}
            onChange={handleChange}
          >
            <option value="">Pessoa física ou jurídica?</option>
            <option value="Pessoa Física">Pessoa Física</option>
            <option value="Pessoa Jurídica">Pessoa Jurídica</option>
          </select>
        </div>

        <div>
          <select
            name="cf_fraude_confirmada"
            id="cf_fraude_confirmada"
            value={formData.cf_fraude_confirmada}
            onChange={handleChange}
          >
            <option value="">Fraude confirmada?</option>
            <option value="Sim">Sim</option>
            <option value="Não">Não</option>
          </select>
        </div>

        <div className="span2">
          <input
            placeholder="Email antigo"
            type="email"
            id="cf_e_mail_antigo"
            name="cf_e_mail_antigo"
            value={formData.cf_e_mail_antigo}
            onChange={handleChange}
          />
          <br />
        </div>

        <div>
          <input
            placeholder="Bairro"
            type="text"
            id="cf_bairro"
            name="cf_bairro"
            value={formData.cf_bairro}
            onChange={handleChange}
          />
          <br />
        </div>

        <div>
          <input
            placeholder="Número da residência"
            type="number"
            id="cf_numero_da_residencia"
            name="cf_numero_da_residencia"
            value={formData.cf_numero_da_residencia}
            onChange={handleChange}
          />
          <br />
        </div>

        <div className="span2">
          <input
            placeholder="Complemento"
            type="text"
            id="cf_complemento"
            name="cf_complemento"
            value={formData.cf_complemento}
            onChange={handleChange}
          />
          <br />
        </div>

        <h3>Dados financeiros</h3>
        <br />

        <div className="span2">
          <input
            placeholder="Nome do favorecido da conta"
            type="text"
            id="cf_nome_do_favorecido_da_conta"
            name="cf_nome_do_favorecido_da_conta"
            value={formData.cf_nome_do_favorecido_da_conta}
            onChange={handleChange}
          />
          <br />
        </div>

        <div>
          <select
            name="cf_banco_do_cliente"
            id="cf_banco_do_cliente"
            value={formData.cf_banco_do_cliente}
            onChange={handleChange}
          >
            <option value="">Banco do cliente</option>
            <option value="46 - BANCO SUMITOMO MITSUI BRASIL S.A">
              46 - BANCO SUMITOMO MITSUI BRASIL S.A
            </option>
            <option value="1 - BANCO DO BRASIL S.A">
              1 - BANCO DO BRASIL S.A
            </option>
            <option value="3 - BANCO DA AMAZONIA S.A">
              3 - BANCO DA AMAZONIA S.A
            </option>
            <option value="4 - BANCO DO NORDESTE DO BRASIL S.A.">
              4 - BANCO DO NORDESTE DO BRASIL S.A.
            </option>
            <option value="7 - BNDES (BANCO NACIONAL DO DESENVOLVIMENTO SOCIAL)">
              7 - BNDES (BANCO NACIONAL DO DESENVOLVIMENTO SOCIAL)
            </option>
            <option value="10 - CREDICOAMO">10 - CREDICOAMO</option>
            <option value="11 - C.SUISSE HEDGING-GRIFFO CV S.A (CREDIT SUISSE)">
              11 - C.SUISSE HEDGING-GRIFFO CV S.A (CREDIT SUISSE)
            </option>
            <option value="12 - BANCO INBURSA">12 - BANCO INBURSA</option>
            <option value="14 - NATIXIS BRASIL S.A">
              14 - NATIXIS BRASIL S.A
            </option>
            <option value="15 - UBS BRASIL CCTVM S.A">
              15 - UBS BRASIL CCTVM S.A
            </option>
            <option value="16 - CCM DESP TRÂNS SC E RS">
              16 - CCM DESP TRÂNS SC E RS
            </option>
            <option value="17 - BNY MELLON BANCO S.A">
              17 - BNY MELLON BANCO S.A
            </option>
            <option value="18 - BANCO TRICURY S.A">
              18 - BANCO TRICURY S.A
            </option>
            <option value="21 - BANCO BANESTES S.A">
              21 - BANCO BANESTES S.A
            </option>
            <option value="24 - BCO BANDEPE S.A">24 - BCO BANDEPE S.A</option>
            <option value="25 - BANCO ALFA S.A.">25 - BANCO ALFA S.A.</option>
            <option value="33 - BANCO SANTANDER BRASIL S.A">
              33 - BANCO SANTANDER BRASIL S.A
            </option>
            <option value="36 - BANCO BBI S.A">36 - BANCO BBI S.A</option>
            <option value="37 - BANCO DO ESTADO DO PARÁ S.A">
              37 - BANCO DO ESTADO DO PARÁ S.A
            </option>
            <option value="40 - BANCO CARGILL S.A">
              40 - BANCO CARGILL S.A
            </option>
            <option value="41 - BANRISUL – BANCO DO ESTADO DO RIO GRANDE DO SUL S.A">
              41 - BANRISUL – BANCO DO ESTADO DO RIO GRANDE DO SUL S.A
            </option>
            <option value="47 - BANCO DO ESTADO DE SERGIPE S.A">
              47 - BANCO DO ESTADO DE SERGIPE S.A
            </option>
            <option value="60 - CONFIDENCE CC S.A">
              60 - CONFIDENCE CC S.A
            </option>
            <option value="62 - HIPERCARD BM S.A">62 - HIPERCARD BM S.A</option>
            <option value="64 - GOLDMAN SACHS DO BRASIL BM S.A">
              64 - GOLDMAN SACHS DO BRASIL BM S.A
            </option>
            <option value="65 - BANCO ANDIBANK S.A">
              65 - BANCO ANDIBANK S.A
            </option>
            <option value="66 - BANCO MORGAN STANLEY S.A">
              66 - BANCO MORGAN STANLEY S.A
            </option>
            <option value="69 - BANCO CREFISA S.A">
              69 - BANCO CREFISA S.A
            </option>
            <option value="70 - BANCO DE BRASÍLIA (BRB)">
              70 - BANCO DE BRASÍLIA (BRB)
            </option>
            <option value="74 - BCO. J.SAFRA S.A">74 - BCO. J.SAFRA S.A</option>
            <option value="75 - BCO ABN AMRO S.A">75 - BCO ABN AMRO S.A</option>
            <option value="76 - BANCO KDB BRASIL S.A.">
              76 - BANCO KDB BRASIL S.A.
            </option>
            <option value="77 - BANCO INTER S.A">77 - BANCO INTER S.A</option>
            <option value="78 - HAITONG BI DO BRASIL S.A">
              78 - HAITONG BI DO BRASIL S.A
            </option>
            <option value="79 - BANCO ORIGINAL DO AGRONEGÓCIO S.A">
              79 - BANCO ORIGINAL DO AGRONEGÓCIO S.A
            </option>
            <option value="80 - BeT CC LTDA">80 - BeT CC LTDA</option>
            <option value="81 - BBN BANCO BRASILEIRO DE NEGOCIOS S.A">
              81 - BBN BANCO BRASILEIRO DE NEGOCIOS S.A
            </option>
            <option value="82 - BANCO TOPÁZIO S.A">
              82 - BANCO TOPÁZIO S.A
            </option>
            <option value="83 - BANCO DA CHINA BRASIL S.A">
              83 - BANCO DA CHINA BRASIL S.A
            </option>
            <option value="84 - UNIPRIME NORTE DO PARANÁ">
              84 - UNIPRIME NORTE DO PARANÁ
            </option>
            <option value="85 - AILLOS">85 - AILLOS</option>
            <option value="85 - COOPERATIVA AILLOS">
              85 - COOPERATIVA AILLOS
            </option>
            <option value="89 - CCR REG MOGIANA">89 - CCR REG MOGIANA</option>
            <option value="91 - UNICRED CENTRAL RS">
              91 - UNICRED CENTRAL RS
            </option>
            <option value="92 - BRK S.A">92 - BRK S.A</option>
            <option value="93 - PÓLOCRED SCMEPP LTDA">
              93 - PÓLOCRED SCMEPP LTDA
            </option>
            <option value="94 - BANCO FINAXIS">94 - BANCO FINAXIS</option>
            <option value="95 - BANCO CONFIDENCE DE CÂMBIO S.A">
              95 - BANCO CONFIDENCE DE CÂMBIO S.A
            </option>
            <option value="96 - BANCO B3 S.A">96 - BANCO B3 S.A</option>
            <option value="97 - CCC NOROESTE BRASILEIRO LTD A">
              97 - CCC NOROESTE BRASILEIRO LTD A
            </option>
            <option value="98 - CREDIALIANÇA CCR">98 - CREDIALIANÇA CCR</option>
            <option value="99 - UNIPRIME CENTRAL CCC LTDA">
              99 - UNIPRIME CENTRAL CCC LTDA
            </option>
            <option value="100 - PLANNER CORRETORA DE VALORES S.A">
              100 - PLANNER CORRETORA DE VALORES S.A
            </option>
            <option value="101 - RENASCENCA DTVM LTD A">
              101 - RENASCENCA DTVM LTD A
            </option>
            <option value="102 - XP INVESTIMENTOS S.A">
              102 - XP INVESTIMENTOS S.A
            </option>
            <option value="104 - CAIXA ECONÔMICA FEDERAL (CEF)">
              104 - CAIXA ECONÔMICA FEDERAL (CEF)
            </option>
            <option value="105 - LECCA CFI S.A">105 - LECCA CFI S.A</option>
            <option value="107 - BANCO BOCOM BBM S.A">
              107 - BANCO BOCOM BBM S.A
            </option>
            <option value="108 - PORTOCRED S.A">108 - PORTOCRED S.A</option>
            <option value="111 - BANCO OLIVEIRA TRUST DTVM S.A">
              111 - BANCO OLIVEIRA TRUST DTVM S.A
            </option>
            <option value="113 - MAGLIANO S.A">113 - MAGLIANO S.A</option>
            <option value="114 - CENTRAL COOPERATIVA DE CRÉDITO NO ESTADO DO ESPÍRITO SANTO">
              114 - CENTRAL COOPERATIVA DE CRÉDITO NO ESTADO DO ESPÍRITO SANTO
            </option>
            <option value="117 - ADVANCED CC LTDA">
              117 - ADVANCED CC LTDA
            </option>
            <option value="118 - STANDARD CHARTERED BI S.A">
              118 - STANDARD CHARTERED BI S.A
            </option>
            <option value="119 - BANCO WESTERN UNION">
              119 - BANCO WESTERN UNION
            </option>
            <option value="120 - BANCO RODOBENS S.A">
              120 - BANCO RODOBENS S.A
            </option>
            <option value="121 - BANCO AGIBANK S.A">
              121 - BANCO AGIBANK S.A
            </option>
            <option value="124 - BANCO WOORI BANK DO BRASIL S.A">
              124 - BANCO WOORI BANK DO BRASIL S.A
            </option>
            <option value="125 - BRASIL PLURAL S.A BANCO">
              125 - BRASIL PLURAL S.A BANCO
            </option>
            <option value="126 - BR PARTNERS BI">126 - BR PARTNERS BI</option>
            <option value="127 - CODEPE CVC S.A">127 - CODEPE CVC S.A</option>
            <option value="128 - MS BANK S.A BANCO DE CÂMBIO">
              128 - MS BANK S.A BANCO DE CÂMBIO
            </option>
            <option value="129 - UBS BRASIL BI S.A">
              129 - UBS BRASIL BI S.A
            </option>
            <option value="130 - CARUANA SCFI">130 - CARUANA SCFI</option>
            <option value="131 - TULLETT PREBON BRASIL CVC LTDA">
              131 - TULLETT PREBON BRASIL CVC LTDA
            </option>
            <option value="132 - ICB BRASIL BM S.A">
              132 - ICB BRASIL BM S.A
            </option>
            <option value="133 - CRESOL CONFEDERAÇÃO">
              133 - CRESOL CONFEDERAÇÃO
            </option>
            <option value="134 - BGC LIQUIDEZ DTVM LTDA">
              134 - BGC LIQUIDEZ DTVM LTDA
            </option>
            <option value="136 - UNICRED COOPERATIVA">
              136 - UNICRED COOPERATIVA
            </option>
            <option value="137 - MULTIMONEY CC LTDA">
              137 - MULTIMONEY CC LTDA
            </option>
            <option value="138 - GET MONEY CC LTDA">
              138 - GET MONEY CC LTDA
            </option>
            <option value="139 - INTESA SANPAOLO BRASIL S.A">
              139 - INTESA SANPAOLO BRASIL S.A
            </option>
            <option value="140 - EASYINVEST – TÍTULO CV S.A">
              140 - EASYINVEST – TÍTULO CV S.A
            </option>
            <option value="142 - BROKER BRASIL CC LTDA">
              142 - BROKER BRASIL CC LTDA
            </option>
            <option value="143 - TREVISAN CC S.A">143 - TREVISAN CC S.A</option>
            <option value="144 - BEXS BANCO DE CÂMBIO S.A.">
              144 - BEXS BANCO DE CÂMBIO S.A.
            </option>
            <option value="145 - LEVYCAM CCV LTDA">
              145 - LEVYCAM CCV LTDA
            </option>
            <option value="146 - GUITTA CC LTDA">146 - GUITTA CC LTDA</option>
            <option value="149 - FACTA S.A. CFI">149 - FACTA S.A. CFI</option>
            <option value="157 - ICAP DO BRASIL CTVLM LTDA">
              157 - ICAP DO BRASIL CTVLM LTDA
            </option>
            <option value="159 - CASA CREDITO S.A">
              159 - CASA CREDITO S.A
            </option>
            <option value="163 - COMMERZBANK BRASIL S.A BANCO MÚLTIPLO">
              163 - COMMERZBANK BRASIL S.A BANCO MÚLTIPLO
            </option>
            <option value="169 - BANCO OLÉ BONSUCESSO CONSIGNADO S.A">
              169 - BANCO OLÉ BONSUCESSO CONSIGNADO S.A
            </option>
            <option value="172 - ALBATROSS CCV S.A">
              172 - ALBATROSS CCV S.A
            </option>
            <option value="173 - BRL TRUST DTVM SA">
              173 - BRL TRUST DTVM SA
            </option>
            <option value="174 - PERNAMBUCANAS FINANC S.A">
              174 - PERNAMBUCANAS FINANC S.A
            </option>
            <option value="177 - GUIDE">177 - GUIDE</option>
            <option value="180 - CM CAPITAL MARKETS CCTVM LTDA">
              180 - CM CAPITAL MARKETS CCTVM LTDA
            </option>
            <option value="182 - DACASA FINANCEIRA S/A">
              182 - DACASA FINANCEIRA S/A
            </option>
            <option value="183 - SOCRED S.A">183 - SOCRED S.A</option>
            <option value="188 - ATIVA S.A INVESTIMENTOS">
              188 - ATIVA S.A INVESTIMENTOS
            </option>
            <option value="189 - HS FINANCEIRA">189 - HS FINANCEIRA</option>
            <option value="190 - SERVICOOP">190 - SERVICOOP</option>
            <option value="191 - NOVA FUTURA CTVM LTDA">
              191 - NOVA FUTURA CTVM LTDA
            </option>
            <option value="194 - PARMETAL DTVM LTDA">
              194 - PARMETAL DTVM LTDA
            </option>
            <option value="196 - FAIR CC S.A">196 - FAIR CC S.A</option>
            <option value="197 - STONE PAGAMENTOS S.A">
              197 - STONE PAGAMENTOS S.A
            </option>
            <option value="204 - BANCO BRADESCO BBI S.A">
              204 - BANCO BRADESCO BBI S.A
            </option>
            <option value="208 - BANCO BTG PACTUAL S.A">
              208 - BANCO BTG PACTUAL S.A
            </option>
            <option value="212 - BANCO ORIGINAL S.A">
              212 - BANCO ORIGINAL S.A
            </option>
            <option value="213 - BANCO ARBI S.A">213 - BANCO ARBI S.A</option>
            <option value="217 - BANCO JOHN DEERE S.A">
              217 - BANCO JOHN DEERE S.A
            </option>
            <option value="218 - BS2">218 - BS2</option>
            <option value="222 - CCR REG SÃO CARLOS">
              222 - CCR REG SÃO CARLOS
            </option>
            <option value="223 - DRW">223 - DRW</option>
            <option value="224 - BANCO FIBRA S.A">224 - BANCO FIBRA S.A</option>
            <option value="233 - BANCO CIFRA S.A">233 - BANCO CIFRA S.A</option>
            <option value="237 - BANCO BRADESCO S.A">
              237 - BANCO BRADESCO S.A
            </option>
            <option value="241 - BANCO CLASSICO S.A">
              241 - BANCO CLASSICO S.A
            </option>
            <option value="243 - BANCO MÁXIMA S.A">
              243 - BANCO MÁXIMA S.A
            </option>
            <option value="246 - BANCO ABC BRASIL S.A">
              246 - BANCO ABC BRASIL S.A
            </option>
            <option value="249 - BANCO INVESTCRED S.A">
              249 - BANCO INVESTCRED S.A
            </option>
            <option value="250 - BCV">250 - BCV</option>
            <option value="253 - BEXS CC S.A">253 - BEXS CC S.A</option>
            <option value="254 - PARANA BANCO S.A">
              254 - PARANA BANCO S.A
            </option>
            <option value="259 - MONEYCORP BANCO DE CÂMBIO S.A">
              259 - MONEYCORP BANCO DE CÂMBIO S.A
            </option>
            <option value="260 - NU PAGAMENTOS S.A">
              260 - NU PAGAMENTOS S.A
            </option>
            <option value="265 - BANCO FATOR S.A">265 - BANCO FATOR S.A</option>
            <option value="266 - BANCO CEDULA S.A">
              266 - BANCO CEDULA S.A
            </option>
            <option value="268 - BARIGUI CH">268 - BARIGUI CH</option>
            <option value="269 - BANCO HSBC S.A">269 - BANCO HSBC S.A</option>
            <option value="270 - SAGITUR CC LTDA">270 - SAGITUR CC LTDA</option>
            <option value="271 - IB CCTVM S.A">271 - IB CCTVM S.A</option>
            <option value="272 - AGK CC LTDA">272 - AGK CC LTDA</option>
            <option value="273 - CCR DE SÃO MIGUEL DO OESTE">
              273 - CCR DE SÃO MIGUEL DO OESTE
            </option>
            <option value="274 - CCR COOPERALIANÇA">
              274 - CCR COOPERALIANÇA
            </option>
            <option value="276 - SENFF S.A">276 - SENFF S.A</option>
            <option value="278 - GENIAL INVESTIMENTOS CVM S.A">
              278 - GENIAL INVESTIMENTOS CVM S.A
            </option>
            <option value="279 - CCR DE LONDRINA">279 - CCR DE LONDRINA</option>
            <option value="280 - AVISTA SA CFI">280 - AVISTA SA CFI</option>
            <option value="281 - CCR COOPERBOM">281 - CCR COOPERBOM</option>
            <option value="283 - RB INVESTIMENTOS S.A">
              283 - RB INVESTIMENTOS S.A
            </option>
            <option value="285 - FRENTE CC LTDA">285 - FRENTE CC LTDA</option>
            <option value="286 - CCR COOPERTRANSCRED">
              286 - CCR COOPERTRANSCRED
            </option>
            <option value="287 - OM DTVM LTDA">287 - OM DTVM LTDA</option>
            <option value="288 - CAROL DTVM LTDA">288 - CAROL DTVM LTDA</option>
            <option value="289 - DECORATUS CFI LTDA">
              289 - DECORATUS CFI LTDA
            </option>
            <option value="290 - MERCADO BITCOIN SERVICOS DIGITAIS LTDA">
              290 - MERCADO BITCOIN SERVICOS DIGITAIS LTDA
            </option>
            <option value="291 - NOVO CRÉDITO CONSIGNADO E FINANCIAMENTO LTDA">
              291 - NOVO CRÉDITO CONSIGNADO E FINANCIAMENTO LTDA
            </option>
            <option value="292 - CC ME">292 - CC ME</option>
            <option value="293 - LASTRO RDV DTVM LTDA">
              293 - LASTRO RDV DTVM LTDA
            </option>
            <option value="294 - FARTURA SCMEPP LTDA">
              294 - FARTURA SCMEPP LTDA
            </option>
            <option value="295 - CCR PIONEIRA">295 - CCR PIONEIRA</option>
            <option value="296 - PAGSEGURO">296 - PAGSEGURO</option>
            <option value="298 - VIPS DTVM LTDA">298 - VIPS DTVM LTDA</option>
            <option value="299 - SOCINAL CC LTDA">299 - SOCINAL CC LTDA</option>
            <option value="300 - BCO LA NACION ARGENTINA">
              300 - BCO LA NACION ARGENTINA
            </option>
            <option value="301 - BPP INSTITUIÇÃO DE PAGAMENTO S.A">
              301 - BPP INSTITUIÇÃO DE PAGAMENTO S.A
            </option>
            <option value="302 - CCR DE SÃO JOSÉ DO RIO PRETO">
              302 - CCR DE SÃO JOSÉ DO RIO PRETO
            </option>
            <option value="303 - CCR DE OURO VERDE">
              303 - CCR DE OURO VERDE
            </option>
            <option value="304 - CCR COOPERALFA">304 - CCR COOPERALFA</option>
            <option value="305 - CCR DOURADOS">305 - CCR DOURADOS</option>
            <option value="306 - CCR DE SÃO JOSÉ DOS PINHAIS">
              306 - CCR DE SÃO JOSÉ DOS PINHAIS
            </option>
            <option value="307 - CCR UNICRED">307 - CCR UNICRED</option>
            <option value="308 - VR CREDIT SCS">308 - VR CREDIT SCS</option>
            <option value="309 - COROADO CC LTDA">309 - COROADO CC LTDA</option>
            <option value="310 - VORTX DTVM LTDA">310 - VORTX DTVM LTDA</option>
            <option value="311 - BANCO CARREFOUR">311 - BANCO CARREFOUR</option>
            <option value="313 - CRR DE CAMPO GRANDE">
              313 - CRR DE CAMPO GRANDE
            </option>
            <option value="314 - LEXIN CC LTDA">314 - LEXIN CC LTDA</option>
            <option value="315 - COMPAR SOLUÇÕES DE PAGAMENTO LTDA">
              315 - COMPAR SOLUÇÕES DE PAGAMENTO LTDA
            </option>
            <option value="317 - BANCO MODAL S.A">317 - BANCO MODAL S.A</option>
            <option value="318 - BANCO BMG S.A">318 - BANCO BMG S.A</option>
            <option value="319 - OM TRADER CCTVM S.A">
              319 - OM TRADER CCTVM S.A
            </option>
            <option value="320 - BANCO CCB BRASIL S.A">
              320 - BANCO CCB BRASIL S.A
            </option>
            <option value="321 - RENASCENCA DTVM LTDA">
              321 - RENASCENCA DTVM LTDA
            </option>
            <option value="322 - CCR DE PRIMAVERA DO LESTE">
              322 - CCR DE PRIMAVERA DO LESTE
            </option>
            <option value="323 - CCR DE COLORADO DO OESTE">
              323 - CCR DE COLORADO DO OESTE
            </option>
            <option value="324 - BANCO CREDIT SUISSE (BRASIL) S.A">
              324 - BANCO CREDIT SUISSE (BRASIL) S.A
            </option>
            <option value="325 - ÓRAMA DTVM">325 - ÓRAMA DTVM</option>
            <option value="326 - BANCO WESTERN S.A">
              326 - BANCO WESTERN S.A
            </option>
            <option value="327 - WOOP SICOOB">327 - WOOP SICOOB</option>
            <option value="328 - BANCO GUANABARA S.A">
              328 - BANCO GUANABARA S.A
            </option>
            <option value="329 - QI SCD S.A">329 - QI SCD S.A</option>
            <option value="330 - BANCO BARI DE INVESTIMENTOS E FINANCIAMENTOS S.A">
              330 - BANCO BARI DE INVESTIMENTOS E FINANCIAMENTOS S.A
            </option>
            <option value="331 - EASYNVEST - TÍTULO CV S.A">
              331 - EASYNVEST - TÍTULO CV S.A
            </option>
            <option value="332 - ACESSO SOLUÇÕES DE PAGAMENTO S.A">
              332 - ACESSO SOLUÇÕES DE PAGAMENTO S.A
            </option>
            <option value="333 - SOCOPA SC PAULISTA S.A">
              333 - SOCOPA SC PAULISTA S.A
            </option>
            <option value="334 - BANCO DIGIMAIS S.A">
              334 - BANCO DIGIMAIS S.A
            </option>
            <option value="335 - BANCO PRIMUS S.A">
              335 - BANCO PRIMUS S.A
            </option>
            <option value="336 - BANCO C6 S.A">336 - BANCO C6 S.A</option>
            <option value="337 - TANGRA CC S.A">337 - TANGRA CC S.A</option>
            <option value="338 - ITAU UNIBANCO S.A">
              338 - ITAU UNIBANCO S.A
            </option>
            <option value="340 - SUPER PAGAMENTOS E ADMINISTRACAO DE MEIOS ELETRONICOS S.A">
              340 - SUPER PAGAMENTOS E ADMINISTRACAO DE MEIOS ELETRONICOS S.A
            </option>
            <option value="341 - ITAÚ BBA S.A">341 - ITAÚ BBA S.A</option>
            <option value="342 - CREDITAS SCD S.A">
              342 - CREDITAS SCD S.A
            </option>
            <option value="343 - AMAGGI S.A CRÉDITO FINANCIAMENTO E INVESTIMENTO">
              343 - AMAGGI S.A CRÉDITO FINANCIAMENTO E INVESTIMENTO
            </option>
            <option value="344 - SOCINAL SCS">344 - SOCINAL SCS</option>
            <option value="345 - BANCO MULTIPLO S.A">
              345 - BANCO MULTIPLO S.A
            </option>
            <option value="346 - BANCO KRAKOWIAK S.A">
              346 - BANCO KRAKOWIAK S.A
            </option>
            <option value="347 - BLUE BENEFÍCIOS SOCIEDADE DE PREVIDÊNCIA PRIVADA">
              347 - BLUE BENEFÍCIOS SOCIEDADE DE PREVIDÊNCIA PRIVADA
            </option>
            <option value="348 - BANCO XP S.A">348 - BANCO XP S.A</option>
            <option value="349 - AMAGGI S.A">349 - AMAGGI S.A</option>
            <option value="350 - GOLD DTVM LTDA">350 - GOLD DTVM LTDA</option>
            <option value="351 - NUTRICASH ADQUIRÊNCIA DE MEIOS DE PAGAMENTO S.A">
              351 - NUTRICASH ADQUIRÊNCIA DE MEIOS DE PAGAMENTO S.A
            </option>
            <option value="352 - ZEMA CRÉDITO FINANCIAMENTO E INVESTIMENTO S.A">
              352 - ZEMA CRÉDITO FINANCIAMENTO E INVESTIMENTO S.A
            </option>
            <option value="353 - TERRA INVESTIMENTOS DISTRIBUIDORA DE TÍTULOS E VALORES MOBILIÁRIOS LTDA">
              353 - TERRA INVESTIMENTOS DISTRIBUIDORA DE TÍTULOS E VALORES
              MOBILIÁRIOS LTDA
            </option>
            <option value="354 - NU FINANCEIRA S.A">
              354 - NU FINANCEIRA S.A
            </option>
            <option value="355 - ÓTIMO SCD S.A">355 - ÓTIMO SCD S.A</option>
            <option value="356 - AL5 SCD S.A">356 - AL5 SCD S.A</option>
            <option value="357 - TORO INVESTIMENTOS S.A">
              357 - TORO INVESTIMENTOS S.A
            </option>
            <option value="358 - EQUINIX DO BRASIL SOLUÇÕES DE TECNOLOGIA EM INFORMÁTICA E TELECOMUNICAÇÕES S.A">
              358 - EQUINIX DO BRASIL SOLUÇÕES DE TECNOLOGIA EM INFORMÁTICA E
              TELECOMUNICAÇÕES S.A
            </option>
            <option value="359 - PÔRTOCRED S.A">359 - PÔRTOCRED S.A</option>
            <option value="360 - BANCO CREDIT SUISSE (BRASIL) S.A">
              360 - BANCO CREDIT SUISSE (BRASIL) S.A
            </option>
            <option value="361 - KIRTON BANK S.A">361 - KIRTON BANK S.A</option>
            <option value="362 - SINGULARE CORRETORA DE TÍTULOS E VALORES MOBILIÁRIOS S.A">
              362 - SINGULARE CORRETORA DE TÍTULOS E VALORES MOBILIÁRIOS S.A
            </option>
            <option value="363 - PIN EMPREENDIMENTOS E PARTICIPAÇÕES S.A">
              363 - PIN EMPREENDIMENTOS E PARTICIPAÇÕES S.A
            </option>
            <option value="364 - GERENCIANET PAGAMENTOS DO BRASIL LTDA">
              364 - GERENCIANET PAGAMENTOS DO BRASIL LTDA
            </option>
            <option value="365 - WARBANK CVC LTDA">
              365 - WARBANK CVC LTDA
            </option>
            <option value="366 - HUB PAGAMENTOS S.A">
              366 - HUB PAGAMENTOS S.A
            </option>
            <option value="367 - ÚNICO CRED SCD">367 - ÚNICO CRED SCD</option>
            <option value="368 - BANCO CSF S.A">368 - BANCO CSF S.A</option>
            <option value="369 - WOOZA S.A">369 - WOOZA S.A</option>
            <option value="370 - WIRECARD BRASIL S.A">
              370 - WIRECARD BRASIL S.A
            </option>
            <option value="371 - BANCO PRIMAR S.A">
              371 - BANCO PRIMAR S.A
            </option>
            <option value="372 - MERCADO PAGO – MP">
              372 - MERCADO PAGO – MP
            </option>
            <option value="373 - SOROCRED CFI S.A">
              373 - SOROCRED CFI S.A
            </option>
            <option value="374 - BRADESCO FINANCIAMENTOS S.A">
              374 - BRADESCO FINANCIAMENTOS S.A
            </option>
            <option value="375 - IPAGARE SERVIÇOS DE PAGAMENTO LTDA">
              375 - IPAGARE SERVIÇOS DE PAGAMENTO LTDA
            </option>
            <option value="376 - BANCO J.P. MORGAN S.A">
              376 - BANCO J.P. MORGAN S.A
            </option>
            <option value="377 - ASSEMPLEA">377 - ASSEMPLEA</option>
            <option value="378 - BANCO STANDARD CHARTERED BRASIL S.A">
              378 - BANCO STANDARD CHARTERED BRASIL S.A
            </option>
            <option value="379 - CREDIFIBRA">379 - CREDIFIBRA</option>
            <option value="380 - CITIBANK N.A.">380 - CITIBANK N.A.</option>
            <option value="381 - BANCO MERCEDES-BENZ S.A.">
              381 - BANCO MERCEDES-BENZ S.A.
            </option>
            <option value="382 - A GERADORA DE ENERGIA S.A">
              382 - A GERADORA DE ENERGIA S.A
            </option>
            <option value="383 - BANCO FORD S.A">383 - BANCO FORD S.A</option>
            <option value="384 - BANCO TOYOTA DO BRASIL S.A">
              384 - BANCO TOYOTA DO BRASIL S.A
            </option>
            <option value="385 - BANCO MERCANTIL DO BRASIL S.A">
              385 - BANCO MERCANTIL DO BRASIL S.A
            </option>
            <option value="386 - BANCO MITSUBISHI BRASIL S.A">
              386 - BANCO MITSUBISHI BRASIL S.A
            </option>
            <option value="387 - BANCO TOYOTA DO BRASIL S.A">
              387 - BANCO TOYOTA DO BRASIL S.A
            </option>
            <option value="388 - BANCO RECIPROCRED S.A">
              388 - BANCO RECIPROCRED S.A
            </option>
            <option value="389 - BANCO MERCANTIL DE INVESTIMENTOS S.A">
              389 - BANCO MERCANTIL DE INVESTIMENTOS S.A
            </option>
            <option value="390 - BANCO GM S.A">390 - BANCO GM S.A</option>
            <option value="391 - BANCO VOLKSWAGEN S.A">
              391 - BANCO VOLKSWAGEN S.A
            </option>
            <option value="392 - BANCO MERCANTIL DO BRASIL S.A">
              392 - BANCO MERCANTIL DO BRASIL S.A
            </option>
            <option value="393 - BANCO VOLKSWAGEN S.A">
              393 - BANCO VOLKSWAGEN S.A
            </option>
            <option value="394 - BANCO BRADESCO FINANCIAMENTOS S.A">
              394 - BANCO BRADESCO FINANCIAMENTOS S.A
            </option>
            <option value="395 - BANCO KDB BRASIL S.A">
              395 - BANCO KDB BRASIL S.A
            </option>
            <option value="396 - BANCO MITSUBISHI UFJ BRASIL S.A">
              396 - BANCO MITSUBISHI UFJ BRASIL S.A
            </option>
            <option value="397 - BANCO COOPERATIVO SICREDI S.A">
              397 - BANCO COOPERATIVO SICREDI S.A
            </option>
            <option value="398 - BANCO HSBC S.A">398 - BANCO HSBC S.A</option>
            <option value="399 - KIRTON BANK CAYMAN S.A">
              399 - KIRTON BANK CAYMAN S.A
            </option>
            <option value="400 - BANCO RABOBANK INTERNATIONAL BRASIL S.A">
              400 - BANCO RABOBANK INTERNATIONAL BRASIL S.A
            </option>
            <option value="401 - BANCO DE LA NACION ARGENTINA">
              401 - BANCO DE LA NACION ARGENTINA
            </option>
            <option value="402 - BANCO HSBC S.A">402 - BANCO HSBC S.A</option>
            <option value="403 - J.P. MORGAN BANCO MÚLTIPLO S.A">
              403 - J.P. MORGAN BANCO MÚLTIPLO S.A
            </option>
            <option value="404 - BANCO DE NUESTRA SEÑORA DE LA PAZ S.A.">
              404 - BANCO DE NUESTRA SEÑORA DE LA PAZ S.A.
            </option>
            <option value="405 - BANCO DE LA REPUBLICA ORIENTAL DEL URUGUAY">
              405 - BANCO DE LA REPUBLICA ORIENTAL DEL URUGUAY
            </option>
            <option value="406 - BANCO BBA CREDITANSTALT S.A.">
              406 - BANCO BBA CREDITANSTALT S.A.
            </option>
            <option value="407 - UNIBANCO UNION DE BANCOS BRASILEIROS S.A">
              407 - UNIBANCO UNION DE BANCOS BRASILEIROS S.A
            </option>
            <option value="408 - BANCO BRADESCO S.A">
              408 - BANCO BRADESCO S.A
            </option>
            <option value="409 - UNIBANCO - UNIAO DE BANCOS BRASILEIROS S.A">
              409 - UNIBANCO - UNIAO DE BANCOS BRASILEIROS S.A
            </option>
            <option value="410 - AND BANCO S.A">410 - AND BANCO S.A</option>
            <option value="411 - BANCO TOKYO MITSUBISHI BRASIL S.A">
              411 - BANCO TOKYO MITSUBISHI BRASIL S.A
            </option>
            <option value="412 - BANCO CAPITAL S.A">
              412 - BANCO CAPITAL S.A
            </option>
            <option value="413 - BANCO FORTALEZA S.A">
              413 - BANCO FORTALEZA S.A
            </option>
            <option value="414 - BANCO DA AMÉRICA MERIDIONAL S.A.">
              414 - BANCO DA AMÉRICA MERIDIONAL S.A.
            </option>
            <option value="415 - BANCO NACIONAL S.A">
              415 - BANCO NACIONAL S.A
            </option>
            <option value="416 - BANCO BNL DO BRASIL S.A">
              416 - BANCO BNL DO BRASIL S.A
            </option>
            <option value="417 - BANCO BONSUCESSO S.A">
              417 - BANCO BONSUCESSO S.A
            </option>
            <option value="418 - BANCO NLEMAR S.A">
              418 - BANCO NLEMAR S.A
            </option>
            <option value="419 - BANCO BANERJ S.A">
              419 - BANCO BANERJ S.A
            </option>
            <option value="420 - BANCO NACIONAL DO NORTE S.A">
              420 - BANCO NACIONAL DO NORTE S.A
            </option>
            <option value="421 - BANCO LLOYDS TSB BANK PLC">
              421 - BANCO LLOYDS TSB BANK PLC
            </option>
            <option value="422 - BANCO SAFRA S.A">422 - BANCO SAFRA S.A</option>
            <option value="423 - BANCO MBM S.A">423 - BANCO MBM S.A</option>
            <option value="424 - BANCO NACIONAL DA AMAZÔNIA S.A">
              424 - BANCO NACIONAL DA AMAZÔNIA S.A
            </option>
            <option value="425 - BANCO BANCANTEL S.A">
              425 - BANCO BANCANTEL S.A
            </option>
            <option value="426 - BANCO BMG S.A">426 - BANCO BMG S.A</option>
            <option value="427 - BANCO GERADOR S.A">
              427 - BANCO GERADOR S.A
            </option>
            <option value="428 - BANCO LLOYDS TSB BANK PLC">
              428 - BANCO LLOYDS TSB BANK PLC
            </option>
            <option value="429 - BANCO PATAGON S.A">
              429 - BANCO PATAGON S.A
            </option>
            <option value="430 - BANCO SARAIVA S.A">
              430 - BANCO SARAIVA S.A
            </option>
            <option value="431 - BANCO GERADOR S.A">
              431 - BANCO GERADOR S.A
            </option>
            <option value="432 - BANCO SAFRA S.A">432 - BANCO SAFRA S.A</option>
            <option value="433 - BANCO RURAL S.A">433 - BANCO RURAL S.A</option>
            <option value="434 - BANCO FORTALEZA S.A">
              434 - BANCO FORTALEZA S.A
            </option>
            <option value="435 - BANCO MORGAN GUARANTY TRUST DO BRASIL S.A">
              435 - BANCO MORGAN GUARANTY TRUST DO BRASIL S.A
            </option>
            <option value="436 - BANCO REAL S.A">436 - BANCO REAL S.A</option>
            <option value="437 - BANCO PATAGON S.A">
              437 - BANCO PATAGON S.A
            </option>
            <option value="438 - BANCO BRADESCO FINANC. S.A">
              438 - BANCO BRADESCO FINANC. S.A
            </option>
            <option value="439 - BANCO FINANCIAL PORTUGUES S.A">
              439 - BANCO FINANCIAL PORTUGUES S.A
            </option>
            <option value="440 - BANCO TOKIO S.A">440 - BANCO TOKIO S.A</option>
            <option value="441 - BANCO LA REPUBLICA ORIENTAL DEL URUGUAY">
              441 - BANCO LA REPUBLICA ORIENTAL DEL URUGUAY
            </option>
            <option value="442 - BANCO LUSO BRASILEIRO S.A">
              442 - BANCO LUSO BRASILEIRO S.A
            </option>
            <option value="443 - BANCO RURAL S.A">443 - BANCO RURAL S.A</option>
            <option value="444 - BANCO BBA CREDITANSTALT S.A">
              444 - BANCO BBA CREDITANSTALT S.A
            </option>
            <option value="445 - BANCO NACOES S.A">
              445 - BANCO NACOES S.A
            </option>
            <option value="446 - BANCO MORGAN GUARANTY TRUST DO BRASIL S.A">
              446 - BANCO MORGAN GUARANTY TRUST DO BRASIL S.A
            </option>
            <option value="447 - BANCO PARIS S.A">447 - BANCO PARIS S.A</option>
            <option value="448 - BANCO BARCLAYS S.A">
              448 - BANCO BARCLAYS S.A
            </option>
            <option value="449 - BANCO FRICRISA AXELRUD S.A">
              449 - BANCO FRICRISA AXELRUD S.A
            </option>
            <option value="450 - BANCO AMERICA DO SUL S.A">
              450 - BANCO AMERICA DO SUL S.A
            </option>
            <option value="451 - BANCO ING S.A">451 - BANCO ING S.A</option>
            <option value="452 - BANCO MULTIPLIC S.A">
              452 - BANCO MULTIPLIC S.A
            </option>
            <option value="453 - BANCO RURAL MAIS S.A">
              453 - BANCO RURAL MAIS S.A
            </option>
            <option value="454 - BANCO VEGA S.A">454 - BANCO VEGA S.A</option>
            <option value="455 - BANCO SUMITOMO MITSUI BRASILEIRO S.A">
              455 - BANCO SUMITOMO MITSUI BRASILEIRO S.A
            </option>
            <option value="456 - BANCO TOKYO S.A">456 - BANCO TOKYO S.A</option>
            <option value="457 - BANCO TIBET S.A">457 - BANCO TIBET S.A</option>
            <option value="458 - BANCO ANGLOSA S.A">
              458 - BANCO ANGLOSA S.A
            </option>
            <option value="459 - BANCO WESTLB DO BRASIL S.A">
              459 - BANCO WESTLB DO BRASIL S.A
            </option>
            <option value="460 - BANCO MORGAN GUARANTY TRUST DO BRASIL S.A">
              460 - BANCO MORGAN GUARANTY TRUST DO BRASIL S.A
            </option>
            <option value="461 - BANCO TOKYO-MITSUBISHI UFJ BRASIL S.A">
              461 - BANCO TOKYO-MITSUBISHI UFJ BRASIL S.A
            </option>
            <option value="462 - BANCO CRUZEIRO DO SUL S.A">
              462 - BANCO CRUZEIRO DO SUL S.A
            </option>
            <option value="463 - BANCO PANTANAL S.A">
              463 - BANCO PANTANAL S.A
            </option>
            <option value="464 - BANCO SUMITOMO MITSUI BRASILEIRO S.A">
              464 - BANCO SUMITOMO MITSUI BRASILEIRO S.A
            </option>
            <option value="465 - BANCO LUSO BRASILEIRO S.A">
              465 - BANCO LUSO BRASILEIRO S.A
            </option>
            <option value="466 - BANCO MUFG BRASIL S.A">
              466 - BANCO MUFG BRASIL S.A
            </option>
            <option value="467 - BANCO GE CAPITAL S.A">
              467 - BANCO GE CAPITAL S.A
            </option>
            <option value="468 - BANCO MIZUHO DO BRASIL S.A">
              468 - BANCO MIZUHO DO BRASIL S.A
            </option>
            <option value="469 - BANCO VOLKSWAGEN S.A">
              469 - BANCO VOLKSWAGEN S.A
            </option>
            <option value="470 - BANCO COMERCIAL E DE INVESTIMENTO SUDAMERIS S.A">
              470 - BANCO COMERCIAL E DE INVESTIMENTO SUDAMERIS S.A
            </option>
            <option value="471 - BANCO RABOBANK INTERNATIONAL BRASIL S.A">
              471 - BANCO RABOBANK INTERNATIONAL BRASIL S.A
            </option>
            <option value="472 - AZUL SOLUCOES DE PAGAMENTO S.A">
              472 - AZUL SOLUCOES DE PAGAMENTO S.A
            </option>
            <option value="473 - BANCO CAIXA GERAL BRASIL S.A">
              473 - BANCO CAIXA GERAL BRASIL S.A
            </option>
            <option value="474 - BANCO CITIBANK S.A">
              474 - BANCO CITIBANK S.A
            </option>
            <option value="475 - BANCO CENTRAL DO BRASIL">
              475 - BANCO CENTRAL DO BRASIL
            </option>
            <option value="476 - BANCO ITAÚ BANK S.A">
              476 - BANCO ITAÚ BANK S.A
            </option>
            <option value="477 - CITIBANK N.A">477 - CITIBANK N.A</option>
            <option value="478 - BANCO CITICARD S.A">
              478 - BANCO CITICARD S.A
            </option>
            <option value="479 - BANCO ITAUBANK S.A">
              479 - BANCO ITAUBANK S.A
            </option>
            <option value="480 - BANCO PORTUGUES BRASILEIRO S.A">
              480 - BANCO PORTUGUES BRASILEIRO S.A
            </option>
            <option value="481 - BANCO HSBC GMB BRASIL S.A">
              481 - BANCO HSBC GMB BRASIL S.A
            </option>
            <option value="482 - BANCO BRADESCO DA AMAZÔNIA S.A">
              482 - BANCO BRADESCO DA AMAZÔNIA S.A
            </option>
            <option value="483 - BANCO MISSONI S.A">
              483 - BANCO MISSONI S.A
            </option>
            <option value="484 - BANCO SANTANDER BRASIL S.A">
              484 - BANCO SANTANDER BRASIL S.A
            </option>
            <option value="485 - BANCO MIZUHO DO BRASIL S.A">
              485 - BANCO MIZUHO DO BRASIL S.A
            </option>
            <option value="486 - BANCO MÚLTIPLA S.A">
              486 - BANCO MÚLTIPLA S.A
            </option>
            <option value="487 - DEUTSCHE BANK S.A - BANCO ALEMAO">
              487 - DEUTSCHE BANK S.A - BANCO ALEMAO
            </option>
            <option value="488 - BANCO J.P. MORGAN S.A">
              488 - BANCO J.P. MORGAN S.A
            </option>
            <option value="489 - BANESTES S.A - BANCO DO ESTADO DO ESPÍRITO SANTO">
              489 - BANESTES S.A - BANCO DO ESTADO DO ESPÍRITO SANTO
            </option>
            <option value="490 - BANCO DE LA REPUBLICA ORIENTAL DEL URUGUAY">
              490 - BANCO DE LA REPUBLICA ORIENTAL DEL URUGUAY
            </option>
            <option value="491 - BANCO MUNDIAL S.A">
              491 - BANCO MUNDIAL S.A
            </option>
            <option value="492 - BANCO NACIONAL DE COMERCIO EXTERIOR S.A - BANCO DE COMERCIO EXTERIOR DO BRASIL S.A">
              492 - BANCO NACIONAL DE COMERCIO EXTERIOR S.A - BANCO DE COMERCIO
              EXTERIOR DO BRASIL S.A
            </option>
            <option value="493 - BANCO UNION S.A.C.A.">
              493 - BANCO UNION S.A.C.A.
            </option>
            <option value="494 - BANCO DE LA REPUBLICA ORIENTAL DEL URUGUAY">
              494 - BANCO DE LA REPUBLICA ORIENTAL DEL URUGUAY
            </option>
            <option value="495 - BANCO DE LA PROVINCIA DE BUENOS AIRES">
              495 - BANCO DE LA PROVINCIA DE BUENOS AIRES
            </option>
            <option value="496 - BANCO BRADESCO BERJ S.A">
              496 - BANCO BRADESCO BERJ S.A
            </option>
            <option value="497 - BANCO IBMEC S.A">497 - BANCO IBMEC S.A</option>
            <option value="498 - BANCO MITSUBISHI DO BRASIL S.A.">
              498 - BANCO MITSUBISHI DO BRASIL S.A.
            </option>
            <option value="499 - BANCO IOCHPE S.A">
              499 - BANCO IOCHPE S.A
            </option>
            <option value="500 - BANCO BGN S.A">500 - BANCO BGN S.A</option>
            <option value="501 - BANCO BRASILEIRO IRAQUIANO S.A">
              501 - BANCO BRASILEIRO IRAQUIANO S.A
            </option>
            <option value="502 - BANCO SANTANDER S.A">
              502 - BANCO SANTANDER S.A
            </option>
            <option value="503 - BANCO CREFISUL">503 - BANCO CREFISUL</option>
            <option value="504 - BANCO MULTIPLIC S.A">
              504 - BANCO MULTIPLIC S.A
            </option>
            <option value="505 - BANCO CREDIT SUISSE (BRASIL) S.A">
              505 - BANCO CREDIT SUISSE (BRASIL) S.A
            </option>
            <option value="506 - BANCO PARANÁ BANCO S.A">
              506 - BANCO PARANÁ BANCO S.A
            </option>
            <option value="507 - BANCO IBI S.A - BANCO MULTIPLO">
              507 - BANCO IBI S.A - BANCO MULTIPLO
            </option>
            <option value="508 - BANCO SINGER S.A">
              508 - BANCO SINGER S.A
            </option>
            <option value="509 - BANCO DO INVESTIMENTO RURAL S.A">
              509 - BANCO DO INVESTIMENTO RURAL S.A
            </option>
            <option value="510 - BANCO BUNNLE S.A">
              510 - BANCO BUNNLE S.A
            </option>
            <option value="511 - BANCO SÉRGIO HENRIQUE S.A">
              511 - BANCO SÉRGIO HENRIQUE S.A
            </option>
            <option value="512 - BANCO DO BANDEIRANTE S.A">
              512 - BANCO DO BANDEIRANTE S.A
            </option>
            <option value="513 - BANCO ICATU S.A">513 - BANCO ICATU S.A</option>
            <option value="514 - BANCO AZTECA DO BRASIL S.A">
              514 - BANCO AZTECA DO BRASIL S.A
            </option>
            <option value="515 - BANCO BUCAR S.A">515 - BANCO BUCAR S.A</option>
            <option value="516 - BANCO LUSO BRASILEIRO S.A">
              516 - BANCO LUSO BRASILEIRO S.A
            </option>
            <option value="517 - BANCO PETRA S.A">517 - BANCO PETRA S.A</option>
            <option value="518 - BANCO WOORI BANK DO BRASIL S.A">
              518 - BANCO WOORI BANK DO BRASIL S.A
            </option>
            <option value="519 - BANCO DAVIVIENDA BRASIL S.A">
              519 - BANCO DAVIVIENDA BRASIL S.A
            </option>
            <option value="520 - BANCO CAPITAL DO BRASIL S.A">
              520 - BANCO CAPITAL DO BRASIL S.A
            </option>
            <option value="521 - BANCO BRAGANTINO S.A">
              521 - BANCO BRAGANTINO S.A
            </option>
            <option value="522 - BANCO TRUST S.A">522 - BANCO TRUST S.A</option>
            <option value="523 - BANCO PANAMERICANO S.A">
              523 - BANCO PANAMERICANO S.A
            </option>
            <option value="524 - BANCO CHINÊS DO BRASIL S.A">
              524 - BANCO CHINÊS DO BRASIL S.A
            </option>
            <option value="525 - BANCO BFC S.A">525 - BANCO BFC S.A</option>
            <option value="526 - BANCO FINAXIS S.A">
              526 - BANCO FINAXIS S.A
            </option>
            <option value="527 - BANCO BGN S.A">527 - BANCO BGN S.A</option>
            <option value="528 - BANCO CIFRA S.A">528 - BANCO CIFRA S.A</option>
            <option value="529 - BANCO HSBC BANCO MÚLTIPLO S.A">
              529 - BANCO HSBC BANCO MÚLTIPLO S.A
            </option>
            <option value="530 - BANCO DE TOKYO-MITSUBISHI UFJ BRASIL S.A">
              530 - BANCO DE TOKYO-MITSUBISHI UFJ BRASIL S.A
            </option>
            <option value="531 - BANCO BRASILEIRO SUIÇO S.A">
              531 - BANCO BRASILEIRO SUIÇO S.A
            </option>
            <option value="532 - BANCO ALVORADA S.A">
              532 - BANCO ALVORADA S.A
            </option>
            <option value="533 - BANCO SISTEMA S.A">
              533 - BANCO SISTEMA S.A
            </option>
            <option value="534 - BANCO WACHOVIA S.A">
              534 - BANCO WACHOVIA S.A
            </option>
            <option value="535 - BANCO MULTIPLO S.A">
              535 - BANCO MULTIPLO S.A
            </option>
            <option value="536 - BANCO CÉDULA S.A">
              536 - BANCO CÉDULA S.A
            </option>
            <option value="537 - BANCO ARBI S.A">537 - BANCO ARBI S.A</option>
            <option value="538 - BANCO PROSPER S.A">
              538 - BANCO PROSPER S.A
            </option>
            <option value="539 - BANCO CETELEM S.A">
              539 - BANCO CETELEM S.A
            </option>
            <option value="540 - BANCO CREDIBANCO S.A">
              540 - BANCO CREDIBANCO S.A
            </option>
            <option value="541 - BANCO CONCORDIA S.A">
              541 - BANCO CONCORDIA S.A
            </option>
            <option value="542 - MANXAT TECNOLOGIA">
              542 - MANXAT TECNOLOGIA
            </option>
            <option value="543 - BANCO VR S.A">543 - BANCO VR S.A</option>
            <option value="544 - BANCO BPN BRASIL S.A">
              544 - BANCO BPN BRASIL S.A
            </option>
            <option value="545 - BANCO SCHAHIN S.A">
              545 - BANCO SCHAHIN S.A
            </option>
            <option value="546 - BANCO CRÉDITO REAL S.A">
              546 - BANCO CRÉDITO REAL S.A
            </option>
            <option value="547 - BANCO COMPANHIA SIDERÚRGICA NACIONAL">
              547 - BANCO COMPANHIA SIDERÚRGICA NACIONAL
            </option>
            <option value="548 - BANCO SICREDI S.A">
              548 - BANCO SICREDI S.A
            </option>
            <option value="549 - BANCO BV S.A">549 - BANCO BV S.A</option>
            <option value="550 - BANCO LUSO BRASILEIRO S.A">
              550 - BANCO LUSO BRASILEIRO S.A
            </option>
            <option value="551 - BANCO DIBENS S.A">
              551 - BANCO DIBENS S.A
            </option>
            <option value="552 - BANCO ATLÂNTICO S.A">
              552 - BANCO ATLÂNTICO S.A
            </option>
            <option value="553 - BANCO DO BRASIL S.A">
              553 - BANCO DO BRASIL S.A
            </option>
            <option value="554 - BANCO NORTH STAR S.A">
              554 - BANCO NORTH STAR S.A
            </option>
            <option value="555 - BANCO VIDEIBRASIL S.A">
              555 - BANCO VIDEIBRASIL S.A
            </option>
            <option value="556 - BANCO BANDEPE S.A">
              556 - BANCO BANDEPE S.A
            </option>
            <option value="557 - BANCO AGROINVEST S.A">
              557 - BANCO AGROINVEST S.A
            </option>
            <option value="558 - BANCO VOTORANTIM S.A">
              558 - BANCO VOTORANTIM S.A
            </option>
            <option value="559 - BANCO AMERICANO S.A">
              559 - BANCO AMERICANO S.A
            </option>
            <option value="560 - BANCO DE CÂMBIO REAL S.A">
              560 - BANCO DE CÂMBIO REAL S.A
            </option>
            <option value="561 - BANCO INVESTOR S.A">
              561 - BANCO INVESTOR S.A
            </option>
            <option value="562 - BANCO APLICAP S.A">
              562 - BANCO APLICAP S.A
            </option>
            <option value="563 - BANCO BRADESCO S.A">
              563 - BANCO BRADESCO S.A
            </option>
            <option value="564 - BANCO J. SAFRA S.A">
              564 - BANCO J. SAFRA S.A
            </option>
            <option value="565 - BANCO SANTANDER BANESPA S.A">
              565 - BANCO SANTANDER BANESPA S.A
            </option>
            <option value="566 - BANCO LEMON S.A">566 - BANCO LEMON S.A</option>
            <option value="567 - BANCO PATENTE S.A">
              567 - BANCO PATENTE S.A
            </option>
            <option value="568 - BANCO INTERMEDIUM S/A">
              568 - BANCO INTERMEDIUM S/A
            </option>
            <option value="569 - BANCO MULTIPLO S.A">
              569 - BANCO MULTIPLO S.A
            </option>
            <option value="570 - BANCO MIZUHO DO BRASIL S.A">
              570 - BANCO MIZUHO DO BRASIL S.A
            </option>
            <option value="571 - BANCO WOORI BANK DO BRASIL S.A">
              571 - BANCO WOORI BANK DO BRASIL S.A
            </option>
            <option value="572 - BANCO STANDARD DE INVESTIMENTOS S.A">
              572 - BANCO STANDARD DE INVESTIMENTOS S.A
            </option>
            <option value="573 - BANCO FINAMAX S.A">
              573 - BANCO FINAMAX S.A
            </option>
            <option value="574 - BANCO CREST S.A">574 - BANCO CREST S.A</option>
            <option value="575 - BANCO JU LAPA S.A">
              575 - BANCO JU LAPA S.A
            </option>
            <option value="576 - BANCO SUMITOMO MITSUI BRASILEIRO S.A">
              576 - BANCO SUMITOMO MITSUI BRASILEIRO S.A
            </option>
            <option value="577 - BANCO DA CHINA BRASIL S.A">
              577 - BANCO DA CHINA BRASIL S.A
            </option>
            <option value="578 - BANCO CIBRASEC S.A">
              578 - BANCO CIBRASEC S.A
            </option>
            <option value="579 - BANCO PIRATINI S.A">
              579 - BANCO PIRATINI S.A
            </option>
            <option value="580 - BANCO SAFRA S.A">580 - BANCO SAFRA S.A</option>
            <option value="581 - BANCO SAFRA S.A">581 - BANCO SAFRA S.A</option>
            <option value="582 - BANCO HAITONG S.A">
              582 - BANCO HAITONG S.A
            </option>
            <option value="583 - BANCO FATOR S.A">583 - BANCO FATOR S.A</option>
            <option value="584 - BANCO LUCMIC S.A">
              584 - BANCO LUCMIC S.A
            </option>
            <option value="585 - BANCO VALE S.A">585 - BANCO VALE S.A</option>
            <option value="586 - BANCO VÓRTX S.A">586 - BANCO VÓRTX S.A</option>
            <option value="587 - BANCO CONCÓRDIA S.A">
              587 - BANCO CONCÓRDIA S.A
            </option>
            <option value="588 - BANCO INVESTOR S.A">
              588 - BANCO INVESTOR S.A
            </option>
            <option value="589 - BANCO MÁXIMA S.A">
              589 - BANCO MÁXIMA S.A
            </option>
            <option value="590 - BANCO LUSDAN S.A">
              590 - BANCO LUSDAN S.A
            </option>
            <option value="591 - BANCO VOLKSWAGEN S.A">
              591 - BANCO VOLKSWAGEN S.A
            </option>
            <option value="592 - BANCO PINE S.A">592 - BANCO PINE S.A</option>
            <option value="593 - BANCO SINOS S.A">593 - BANCO SINOS S.A</option>
            <option value="594 - BANCO BMF S.A">594 - BANCO BMF S.A</option>
            <option value="595 - BANCO AMAPA S.A">595 - BANCO AMAPA S.A</option>
            <option value="596 - BANCO VOTORANTIM S.A">
              596 - BANCO VOTORANTIM S.A
            </option>
            <option value="597 - BANCO DO ESTADO DO ESPIRITO SANTO S.A">
              597 - BANCO DO ESTADO DO ESPIRITO SANTO S.A
            </option>
            <option value="598 - BANCO INDUSVAL S.A">
              598 - BANCO INDUSVAL S.A
            </option>
            <option value="599 - BANCO J. SAFRA S.A">
              599 - BANCO J. SAFRA S.A
            </option>
            <option value="600 - BANCO LUSO BRASILEIRO S.A">
              600 - BANCO LUSO BRASILEIRO S.A
            </option>
            <option value="601 - BANCO FOCUS S.A">601 - BANCO FOCUS S.A</option>
            <option value="602 - BANCO PATENTE S.A">
              602 - BANCO PATENTE S.A
            </option>
            <option value="603 - BANCO FOCO S.A">603 - BANCO FOCO S.A</option>
            <option value="604 - BANCO INDUSTRIAL DO BRASIL S.A">
              604 - BANCO INDUSTRIAL DO BRASIL S.A
            </option>
            <option value="605 - BANCO VOLKSWAGEN S.A">
              605 - BANCO VOLKSWAGEN S.A
            </option>
            <option value="606 - BANCO FERRATI S.A">
              606 - BANCO FERRATI S.A
            </option>
            <option value="607 - BANCO KINECTRA S.A">
              607 - BANCO KINECTRA S.A
            </option>
            <option value="608 - BANCO A.J. RENNER S.A">
              608 - BANCO A.J. RENNER S.A
            </option>
            <option value="609 - BANCO GUANABARA S.A">
              609 - BANCO GUANABARA S.A
            </option>
            <option value="610 - BANCO VR S.A">610 - BANCO VR S.A</option>
            <option value="611 - BANCO PAULISTA S.A">
              611 - BANCO PAULISTA S.A
            </option>
            <option value="612 - BANCO GUANABARA S.A">
              612 - BANCO GUANABARA S.A
            </option>
            <option value="613 - BANCO PECÚNIA S.A">
              613 - BANCO PECÚNIA S.A
            </option>
            <option value="614 - BANCO PIONEIRO S.A">
              614 - BANCO PIONEIRO S.A
            </option>
            <option value="615 - BANCO THECA S.A">615 - BANCO THECA S.A</option>
            <option value="616 - BANCO INTERPACIFICO S.A">
              616 - BANCO INTERPACIFICO S.A
            </option>
            <option value="617 - BANCO INVESTOR S.A">
              617 - BANCO INVESTOR S.A
            </option>
            <option value="618 - BANCO TENDENCIA S.A">
              618 - BANCO TENDENCIA S.A
            </option>
            <option value="619 - BANCO VÓRTX S.A">619 - BANCO VÓRTX S.A</option>
            <option value="620 - BANCO VOITER S.A">
              620 - BANCO VOITER S.A
            </option>
            <option value="621 - BANCO APLICAP S.A">
              621 - BANCO APLICAP S.A
            </option>
            <option value="622 - BANCO AGIBANK S.A">
              622 - BANCO AGIBANK S.A
            </option>
            <option value="623 - BANCO PAN S.A">623 - BANCO PAN S.A</option>
            <option value="624 - BANCO TRAVELEX S.A">
              624 - BANCO TRAVELEX S.A
            </option>
            <option value="625 - BANCO CARME S.A">625 - BANCO CARME S.A</option>
            <option value="626 - BANCO FICSA S.A">626 - BANCO FICSA S.A</option>
            <option value="627 - BANCO DESTAK S.A">
              627 - BANCO DESTAK S.A
            </option>
            <option value="628 - BANCO CRITERIUM S.A">
              628 - BANCO CRITERIUM S.A
            </option>
            <option value="629 - BANCO FICSA S.A">629 - BANCO FICSA S.A</option>
            <option value="630 - BANCO INTERCAP S.A">
              630 - BANCO INTERCAP S.A
            </option>
            <option value="631 - BANCO FICSA S.A">631 - BANCO FICSA S.A</option>
            <option value="632 - BANCO ICATU S.A">632 - BANCO ICATU S.A</option>
            <option value="633 - BANCO REDIMENTO S.A">
              633 - BANCO REDIMENTO S.A
            </option>
            <option value="634 - BANCO TRIANGULO S.A">
              634 - BANCO TRIANGULO S.A
            </option>
            <option value="635 - BANCO DO ESTADO DO AMAPÁ S.A">
              635 - BANCO DO ESTADO DO AMAPÁ S.A
            </option>
            <option value="636 - BANCO TRIFGI S.A">
              636 - BANCO TRIFGI S.A
            </option>
            <option value="637 - BANCO SOFISA S.A">
              637 - BANCO SOFISA S.A
            </option>
            <option value="638 - BANCO PROSPER S.A">
              638 - BANCO PROSPER S.A
            </option>
            <option value="639 - BANCO LUSO BRASILEIRO S.A">
              639 - BANCO LUSO BRASILEIRO S.A
            </option>
            <option value="640 - BANCO CGD BRASIL S.A">
              640 - BANCO CGD BRASIL S.A
            </option>
            <option value="641 - BANCO EXCEL ECONÔMICO S.A">
              641 - BANCO EXCEL ECONÔMICO S.A
            </option>
            <option value="642 - BANCO LENK S.A">642 - BANCO LENK S.A</option>
            <option value="643 - BANCO PINE S.A">643 - BANCO PINE S.A</option>
            <option value="644 - BANCO SCOTIABANK BRASIL S.A">
              644 - BANCO SCOTIABANK BRASIL S.A
            </option>
            <option value="645 - BANCO DO ESTADO DE RORAIMA S.A">
              645 - BANCO DO ESTADO DE RORAIMA S.A
            </option>
            <option value="646 - BANCO SUMITOMO MITSUI BRASILEIRO S.A">
              646 - BANCO SUMITOMO MITSUI BRASILEIRO S.A
            </option>
            <option value="647 - BANCO MARKA S.A">647 - BANCO MARKA S.A</option>
            <option value="648 - BANCO ATLÂNTICO S.A">
              648 - BANCO ATLÂNTICO S.A
            </option>
            <option value="649 - BANCO DIMEN S.A">649 - BANCO DIMEN S.A</option>
            <option value="650 - BANCO PEBB S.A">650 - BANCO PEBB S.A</option>
            <option value="651 - BANCO INDUSTRIAL E COMERCIAL">
              651 - BANCO INDUSTRIAL E COMERCIAL
            </option>
            <option value="652 - BANCO TOKIO MITSUBISHI UFJ BRASIL S.A">
              652 - BANCO TOKIO MITSUBISHI UFJ BRASIL S.A
            </option>
            <option value="653 - BANCO INDUSCRED S.A">
              653 - BANCO INDUSCRED S.A
            </option>
            <option value="654 - BANCO A. J. RENNER S.A">
              654 - BANCO A. J. RENNER S.A
            </option>
            <option value="655 - BANCO VOTORANTIM S.A">
              655 - BANCO VOTORANTIM S.A
            </option>
            <option value="656 - BANCO MATRIX S.A">
              656 - BANCO MATRIX S.A
            </option>
            <option value="657 - BANCO PORTO REAL S.A">
              657 - BANCO PORTO REAL S.A
            </option>
            <option value="658 - BANCO PORTO REAL DE INVESTIMENTOS S.A">
              658 - BANCO PORTO REAL DE INVESTIMENTOS S.A
            </option>
            <option value="659 - BANCO CASH S.A">659 - BANCO CASH S.A</option>
            <option value="660 - BANCO BOPP S.A">660 - BANCO BOPP S.A</option>
            <option value="661 - BANCO LESTE S.A">661 - BANCO LESTE S.A</option>
            <option value="662 - BANCO BANESTES S.A">
              662 - BANCO BANESTES S.A
            </option>
            <option value="663 - BANCO MODAL S.A">663 - BANCO MODAL S.A</option>
            <option value="664 - BANCO DO NORDESTE DO BRASIL S.A">
              664 - BANCO DO NORDESTE DO BRASIL S.A
            </option>
            <option value="665 - BANCO DO NORDESTE DO BRASIL S.A">
              665 - BANCO DO NORDESTE DO BRASIL S.A
            </option>
            <option value="666 - BANCO FICSA S.A">666 - BANCO FICSA S.A</option>
            <option value="667 - BANCO CREDIT BRASIL S.A">
              667 - BANCO CREDIT BRASIL S.A
            </option>
            <option value="668 - BANCO DIMEN S.A">668 - BANCO DIMEN S.A</option>
            <option value="669 - BANCO CAPITAL S.A">
              669 - BANCO CAPITAL S.A
            </option>
            <option value="670 - BANCO DE SÃO PAULO S.A">
              670 - BANCO DE SÃO PAULO S.A
            </option>
            <option value="671 - BANCO VOKO S.A">671 - BANCO VOKO S.A</option>
            <option value="672 - BANCO REISER S.A">
              672 - BANCO REISER S.A
            </option>
            <option value="673 - BANCO INTER-ATLÂNTICO S.A">
              673 - BANCO INTER-ATLÂNTICO S.A
            </option>
            <option value="674 - BANCO PORTO SEGURO S.A">
              674 - BANCO PORTO SEGURO S.A
            </option>
            <option value="675 - BANCO VR S.A">675 - BANCO VR S.A</option>
            <option value="676 - BANCO KOREA S.A">676 - BANCO KOREA S.A</option>
            <option value="677 - BANCO ICBC DO BRASIL S.A">
              677 - BANCO ICBC DO BRASIL S.A
            </option>
            <option value="678 - BANCO NOVO MUNDO S.A">
              678 - BANCO NOVO MUNDO S.A
            </option>
            <option value="679 - BANCO ITAUBANK S.A">
              679 - BANCO ITAUBANK S.A
            </option>
            <option value="680 - BANCO ITAÚ S.A">680 - BANCO ITAÚ S.A</option>
            <option value="681 - BANCO AIG BRASIL S.A">
              681 - BANCO AIG BRASIL S.A
            </option>
            <option value="682 - BANCO LEMON S.A">682 - BANCO LEMON S.A</option>
            <option value="683 - BANCO GERAIS S.A">
              683 - BANCO GERAIS S.A
            </option>
            <option value="684 - BANCO FICSA S.A">684 - BANCO FICSA S.A</option>
            <option value="685 - BANCO NEON S.A">685 - BANCO NEON S.A</option>
            <option value="686 - BANCO KDB DO BRASIL S.A">
              686 - BANCO KDB DO BRASIL S.A
            </option>
            <option value="687 - BANCO INVESTE S.A">
              687 - BANCO INVESTE S.A
            </option>
            <option value="688 - BANCO INVESTCRED UNIBANCO S.A">
              688 - BANCO INVESTCRED UNIBANCO S.A
            </option>
            <option value="689 - BANCO COOPERATIVO SICREDI S.A">
              689 - BANCO COOPERATIVO SICREDI S.A
            </option>
            <option value="690 - BANCO SINOCONTA S.A">
              690 - BANCO SINOCONTA S.A
            </option>
            <option value="691 - BANCO DO ESTADO DO PARÁ S.A">
              691 - BANCO DO ESTADO DO PARÁ S.A
            </option>
            <option value="692 - BANCO TRANSMITALIA S.A">
              692 - BANCO TRANSMITALIA S.A
            </option>
            <option value="693 - BANCO JOÃO EDUARDO S.A">
              693 - BANCO JOÃO EDUARDO S.A
            </option>
            <option value="694 - BANCO MARTINELLI S.A">
              694 - BANCO MARTINELLI S.A
            </option>
            <option value="695 - BANCO REAL S.A">695 - BANCO REAL S.A</option>
            <option value="696 - BANCO UNICREDI S.A">
              696 - BANCO UNICREDI S.A
            </option>
            <option value="697 - BANCO PINE S.A">697 - BANCO PINE S.A</option>
            <option value="698 - BANCO HAVILLAND BRASIL S.A">
              698 - BANCO HAVILLAND BRASIL S.A
            </option>
            <option value="699 - BANCO ROADIMES S.A">
              699 - BANCO ROADIMES S.A
            </option>
            <option value="700 - BANCO HIPERCARD S.A">
              700 - BANCO HIPERCARD S.A
            </option>
            <option value="701 - BANCO MIZUHO DO BRASIL S.A">
              701 - BANCO MIZUHO DO BRASIL S.A
            </option>
            <option value="702 - BANCO SICOOB S.A">
              702 - BANCO SICOOB S.A
            </option>
            <option value="703 - BANCO PINE S.A">703 - BANCO PINE S.A</option>
            <option value="704 - BANCO BRADESCO S.A">
              704 - BANCO BRADESCO S.A
            </option>
            <option value="705 - BANCO VOTORANTIM S.A">
              705 - BANCO VOTORANTIM S.A
            </option>
            <option value="706 - BANCO INDUSTRIAL DO BRASIL S.A">
              706 - BANCO INDUSTRIAL DO BRASIL S.A
            </option>
            <option value="707 - BANCO DAYCOVAL S.A">
              707 - BANCO DAYCOVAL S.A
            </option>
            <option value="708 - BANCO ITAÚ BBA S.A">
              708 - BANCO ITAÚ BBA S.A
            </option>
            <option value="709 - BANCO ITAÚ UNIBANCO HOLDING S.A">
              709 - BANCO ITAÚ UNIBANCO HOLDING S.A
            </option>
            <option value="710 - BANCO VOTORANTIM S.A">
              710 - BANCO VOTORANTIM S.A
            </option>
            <option value="711 - BANCO VETOR S.A">711 - BANCO VETOR S.A</option>
            <option value="712 - BANCO SUIÇO BRASILEIRO S.A">
              712 - BANCO SUIÇO BRASILEIRO S.A
            </option>
            <option value="713 - BANCO CINDAM S.A">
              713 - BANCO CINDAM S.A
            </option>
            <option value="714 - BANCO MEGA S.A">714 - BANCO MEGA S.A</option>
            <option value="715 - BANCO INTERPACIFICO S.A">
              715 - BANCO INTERPACIFICO S.A
            </option>
            <option value="716 - BANCO NOTTING HILL S.A">
              716 - BANCO NOTTING HILL S.A
            </option>
            <option value="717 - BANCO MEGACOMERCIAL S.A">
              717 - BANCO MEGACOMERCIAL S.A
            </option>
            <option value="718 - BANCO OPERADOR S.A">
              718 - BANCO OPERADOR S.A
            </option>
            <option value="719 - BANCO PRUDENCIAL S.A">
              719 - BANCO PRUDENCIAL S.A
            </option>
            <option value="720 - BANCO MAXINVEST S.A">
              720 - BANCO MAXINVEST S.A
            </option>
            <option value="721 - BANCO CREDIBEL S.A">
              721 - BANCO CREDIBEL S.A
            </option>
            <option value="722 - BANCO INTERCONTINENTAL S.A">
              722 - BANCO INTERCONTINENTAL S.A
            </option>
            <option value="723 - BANCO SAGITTARIUS S.A">
              723 - BANCO SAGITTARIUS S.A
            </option>
            <option value="724 - BANCO HONDA S.A">724 - BANCO HONDA S.A</option>
            <option value="725 - BANCO FINABANCO S.A">
              725 - BANCO FINABANCO S.A
            </option>
            <option value="726 - BANCO UNIVERSAL S.A">
              726 - BANCO UNIVERSAL S.A
            </option>
            <option value="727 - BANCO KEB DO BRASIL S.A">
              727 - BANCO KEB DO BRASIL S.A
            </option>
            <option value="728 - BANCO FIDIS S.A">728 - BANCO FIDIS S.A</option>
            <option value="729 - BANCO FONTE S.A">729 - BANCO FONTE S.A</option>
            <option value="730 - BANCO COMERCIAL INVESTIMENTO PIONEIRO S.A">
              730 - BANCO COMERCIAL INVESTIMENTO PIONEIRO S.A
            </option>
            <option value="731 - BANCO COMERCIAL DA PALESTINA S.A">
              731 - BANCO COMERCIAL DA PALESTINA S.A
            </option>
            <option value="732 - BANCO CLARION S.A">
              732 - BANCO CLARION S.A
            </option>
            <option value="733 - BANCO GIBRALTAR S.A">
              733 - BANCO GIBRALTAR S.A
            </option>
            <option value="734 - BANCO GERADOR S.A">
              734 - BANCO GERADOR S.A
            </option>
            <option value="735 - BANCO AQUARIUS S.A">
              735 - BANCO AQUARIUS S.A
            </option>
            <option value="736 - BANCO BANCORP S.A">
              736 - BANCO BANCORP S.A
            </option>
            <option value="737 - BANCO MONGERAL AEGON S.A">
              737 - BANCO MONGERAL AEGON S.A
            </option>
            <option value="738 - BANCO MORADA S.A">
              738 - BANCO MORADA S.A
            </option>
            <option value="739 - BANCO DE CREDITO METROPOLITANO S.A">
              739 - BANCO DE CREDITO METROPOLITANO S.A
            </option>
            <option value="740 - BANCO BARCLAYS S.A">
              740 - BANCO BARCLAYS S.A
            </option>
            <option value="741 - BANCO FIRST NATIONAL BANK">
              741 - BANCO FIRST NATIONAL BANK
            </option>
            <option value="742 - BANCO EAGLE S.A">742 - BANCO EAGLE S.A</option>
            <option value="743 - BANCO EAGLE S.A">743 - BANCO EAGLE S.A</option>
            <option value="744 - BANCO QUERO-QUERO S.A">
              744 - BANCO QUERO-QUERO S.A
            </option>
            <option value="745 - BANCO CITIBANK S.A">
              745 - BANCO CITIBANK S.A
            </option>
            <option value="746 - BANCO MODAL S.A">746 - BANCO MODAL S.A</option>
            <option value="747 - BANCO RABOBANK INTERNATIONAL BRASIL S.A">
              747 - BANCO RABOBANK INTERNATIONAL BRASIL S.A
            </option>
            <option value="748 - BANCO COOPERATIVO SICREDI S.A">
              748 - BANCO COOPERATIVO SICREDI S.A
            </option>
            <option value="749 - BANCO SIMPLES S.A">
              749 - BANCO SIMPLES S.A
            </option>
            <option value="750 - BANCO REPUBLIC NATIONAL BANK OF NEW YORK">
              750 - BANCO REPUBLIC NATIONAL BANK OF NEW YORK
            </option>
            <option value="751 - DRESDNER BANK LATEINAMERIKA-BRASIL S.A">
              751 - DRESDNER BANK LATEINAMERIKA-BRASIL S.A
            </option>
            <option value="752 - BANCO BANQUE NATIONALE DE PARIS BRASIL S.A">
              752 - BANCO BANQUE NATIONALE DE PARIS BRASIL S.A
            </option>
            <option value="753 - BANCO COMERCIAL URUGUAI S.A">
              753 - BANCO COMERCIAL URUGUAI S.A
            </option>
            <option value="754 - BANCO SISTEMA S.A">
              754 - BANCO SISTEMA S.A
            </option>
            <option value="755 - BANCO MERRILL LYNCH DE INVESTIMENTOS S.A">
              755 - BANCO MERRILL LYNCH DE INVESTIMENTOS S.A
            </option>
            <option value="756 - BANCO CRÉDIT AGRICOLE BRASIL S.A">
              756 - BANCO CRÉDIT AGRICOLE BRASIL S.A
            </option>
            <option value="757 - BANCO KEB HANA DO BRASIL S.A">
              757 - BANCO KEB HANA DO BRASIL S.A
            </option>
          </select>
        </div>

        <div>
          <select
            name="cf_tipo_de_conta"
            id="cf_tipo_de_conta"
            value={formData.cf_tipo_de_conta}
            onChange={handleChange}
          >
            <option value="">Tipo de conta</option>
            <option value="Conta Corrente">Conta Corrente</option>
            <option value="Conta Poupança">Conta Poupança</option>
          </select>
        </div>

        <div>
          <input
            placeholder="Agência do cliente"
            type="text"
            id="cf_agencia_do_cliente"
            name="cf_agencia_do_cliente"
            value={formData.cf_agencia_do_cliente}
            onChange={handleChange}
          />
          <br />
        </div>

        <div>
          <input
            placeholder="Dígito da conta do cliente"
            type="text"
            id="cf_digito_da_conta_do_cliente"
            name="cf_digito_da_conta_do_cliente"
            value={formData.cf_digito_da_conta_do_cliente}
            onChange={handleChange}
          />
          <br />
        </div>

        <div className="span2">
          <input
            placeholder="Número da conta do cliente - Sem dígito"
            type="text"
            id="cf_numero_da_conta_do_cliente_sem_digito"
            name="cf_numero_da_conta_do_cliente_sem_digito"
            value={formData.cf_numero_da_conta_do_cliente_sem_digito}
            onChange={handleChange}
          />
          <br />
        </div>

        <br />
        <div className="span2 justifyEnd">
          <button type="submit" className="searchBtn" id="atualizar">
            Criar contato
          </button>
        </div>
      </form>
    </div>
  );
};

export { ModalCliente };
