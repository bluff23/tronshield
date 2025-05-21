-- Create verified_wallets table
CREATE TABLE IF NOT EXISTS verified_wallets (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    address TEXT NOT NULL UNIQUE,
    verified_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    security_score INTEGER NOT NULL,
    risk_level TEXT NOT NULL CHECK (risk_level IN ('Safe', 'Moderate', 'High Risk')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index on address for faster lookups
CREATE INDEX IF NOT EXISTS idx_verified_wallets_address ON verified_wallets(address);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_verified_wallets_updated_at
    BEFORE UPDATE ON verified_wallets
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column(); 