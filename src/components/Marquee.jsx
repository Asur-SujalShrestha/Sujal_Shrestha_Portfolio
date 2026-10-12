const items = [
  'Java', 'Spring Boot', 'Spring Modulith', 'Hexagonal Architecture', 'Microservices', 'Keycloak', 'PostgreSQL',
  'Redis', 'Elasticsearch', 'Kafka', 'RabbitMQ', 'WebSocket', 'Docker', 'Kubernetes', 'HashiCorp Vault', 'React.js',
]

export default function Marquee() {
  const row = [...items, ...items]
  return (
    <div className="marquee overflow-hidden border-y border-line bg-deep/50 py-4" aria-hidden="true">
      <div className="marquee-track flex w-max gap-10 whitespace-nowrap font-mono text-sm text-mist">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-10">
            {t}
            <span className="h-1.5 w-1.5 rounded-full bg-rhodo" />
          </span>
        ))}
      </div>
    </div>
  )
}
