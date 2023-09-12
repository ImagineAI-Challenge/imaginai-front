const ip = '172.23.160.1' // ip da máquina
const port = '8080' // port vide a api de comunicacao
const apiUrl = `http://${ip}:${port}/gpt/prompt`;

export const enviarMensagemAPI = async (mensagem) => {
   try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt: mensagem,
        maxTokens: 100,
      }),
    });

    if (!response.ok) {
      throw new Error('Erro na solicitação: ' + response.status);
    }

    const data = await response.json();
    console.log(data)
    return data;
  } catch (error) {
    console.error('Erro na solicitação:', error);
    throw error;
  }
}
