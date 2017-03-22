var netAddress = process.env.NODE_ENV === 'production' ? 'prod' : 'dev';

export default {
    netAddress,
    endpoint: 'endpoint'
}